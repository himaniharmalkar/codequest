from flask import Flask, request, jsonify, render_template, session
from nlp_utils import extract_keywords
from quiz_generator import generate_quiz, load_question_db, check_answer
import pdfplumber
import os
import random
import json

app = Flask(__name__)
app.secret_key = "quiz_app_secret_key"  # For session management

skill_list = ['python', 'sql', 'java', 'javascript', 'react', 'vue', 'angular',
              'nodejs', 'ruby', 'php', 'html', 'css', 'aws', 'cloud', 'devops', 'ml', 'oop']
db = load_question_db()


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.form.get("prompt", "")
    jd_file = request.files.get("jd_file")

    text = ""
    if jd_file:
        filename = jd_file.filename.lower()
        if filename.endswith('.pdf'):
            with pdfplumber.open(jd_file) as pdf:
                text = "\n".join(page.extract_text() for page in pdf.pages)
        elif filename.endswith(('.txt', '.doc', '.docx')):
            text = jd_file.read().decode('utf-8', errors='ignore')
    elif prompt:
        text = prompt

    keywords = extract_keywords(text.lower(), skill_list)

    # If no keywords found, add a default one
    if not keywords:
        keywords = ['general']

    # Generate and shuffle the quiz questions
    full_quiz = generate_quiz(keywords, db)
    random.shuffle(full_quiz)

    # Store for session and frontend display
    quiz_for_session = []
    quiz_for_frontend = []

    for i, q in enumerate(full_quiz):
        options = q["options"]
        random.shuffle(options)  # Shuffle the options list

        # Find new correct index after shuffle
        correct_index = next((idx for idx, opt in enumerate(options) if opt.get('is_correct')), 0)

        # Store question and correct index for answer checking
        quiz_for_session.append({
            'question': q['question'],
            'correct_index': correct_index
        })

        # Format for frontend
        quiz_for_frontend.append({
            "question_number": i + 1,
            "question": q["question"],
            "options": [opt["text"] for opt in options]
        })

    # Save to session
    session['quiz'] = json.dumps(quiz_for_session)

    # Add generic sample questions if needed
    while len(quiz_for_frontend) < 5:
        quiz_for_frontend.append({
            "question_number": len(quiz_for_frontend) + 1,
            "question": f"Sample question about {keywords[0]}?",
            "options": [
                "Correct answer",
                "Wrong answer 1",
                "Wrong answer 2",
                "Wrong answer 3"
            ]
        })

    return jsonify(quiz_for_frontend)


@app.route('/check_answers', methods=['POST'])
def check_answers():
    # Get user answers from the request
    user_answers = request.json.get('answers', [])

    # Get the stored quiz from session
    stored_quiz = json.loads(session.get('quiz', '[]'))

    # Calculate score
    correct = 0
    results = []

    for i, question in enumerate(stored_quiz):
        if i < len(user_answers):
            is_correct = (user_answers[i] == question['correct_index'])
            if is_correct:
                correct += 1

            results.append({
                'question': question['question'],
                'is_correct': is_correct,
                'correct_index': question['correct_index']
            })

    score = {
        'score': correct,
        'total': len(stored_quiz),
        'percentage': (correct / len(stored_quiz) * 100) if stored_quiz else 0,
        'results': results
    }

    return jsonify(score)


@app.route('/save_results', methods=['POST'])
def save_results():
    # In a real app, you would save the results to a database
    return jsonify({"success": True})


if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask, request, jsonify, render_template, session
# from nlp_utils import extract_keywords
# from quiz_generator import generate_quiz, load_question_db, check_answer
# import pdfplumber
# import os
# import random
# import json

# app = Flask(__name__)
# app.secret_key = "quiz_app_secret_key"  # For session management

# skill_list = ['python', 'sql', 'java', 'javascript', 'react', 'vue', 'angular', 
#              'nodejs', 'ruby', 'php', 'html', 'css', 'aws', 'cloud', 'devops', 'ml', 'oop']
# db = load_question_db()

# @app.route('/')
# def home():
#     return render_template("index.html")

# @app.route('/generate', methods=['POST'])
# def generate():
#     prompt = request.form.get("prompt", "")
#     jd_file = request.files.get("jd_file")

#     text = ""
#     if jd_file:
#         filename = jd_file.filename.lower()
#         if filename.endswith('.pdf'):
#             with pdfplumber.open(jd_file) as pdf:
#                 text = "\n".join(page.extract_text() for page in pdf.pages)
#         elif filename.endswith(('.txt', '.doc', '.docx')):
#             text = jd_file.read().decode('utf-8', errors='ignore')
#     elif prompt:
#         text = prompt

#     keywords = extract_keywords(text.lower(), skill_list)
    
#     # If no keywords found, add a default one
#     if not keywords:
#         keywords = ['general']
    
#     # Generate and shuffle the quiz questions
#     full_quiz = generate_quiz(keywords, db)
#     random.shuffle(full_quiz)

#     # Store for session and frontend display
#     quiz_for_session = []
#     quiz_for_frontend = []

#     for i, q in enumerate(full_quiz):
#         ptions = q["options"]
#         random.shuffle(options)  # Shuffle the options list

#         # Find new correct index after shuffle
#         correct_index = next((idx for idx, opt in enumerate(options) if opt.get('is_correct')), 0)

#         # Store question and correct index for answer checking
#         quiz_for_session.append({
#             'question': q['question'],
#             'correct_index': correct_index
#         })

#         # Format for frontend
#         quiz_for_frontend.append({
#             "question_number": i + 1,
#             "question": q["question"],
#             "options": [opt["text"] for opt in options]
#         })

#         # Save to session
#         session['quiz'] = json.dumps(quiz_for_session)

#         # Add generic sample questions if needed
#         while len(quiz_for_frontend) < 5:
#             quiz_for_frontend.append({
#                 "question_number": len(quiz_for_frontend) + 1,
#                 "question": f"Sample question about {keywords[0]}?",
#                 "options": [
#                     "Correct answer",
#                     "Wrong answer 1",
#                     "Wrong answer 2",
#                     "Wrong answer 3"
#                 ]
#             })

#         return jsonify(quiz_for_frontend)

    
#     # # Generate the quiz with all details
#     # full_quiz = generate_quiz(keywords, db)
    
#     # # Store the full quiz in session for answer checking later
#     # session['quiz'] = json.dumps([{
#     #     'question': q['question'],
#     #     'correct_index': q.get('correct_index', next((i for i, opt in enumerate(q['options']) if opt['is_correct']), 0))
#     # } for q in full_quiz])
    
#     # # Format the quiz for frontend display - only send necessary data
#     # formatted_quiz = []
#     # for i, q in enumerate(full_quiz):
#     #     formatted_question = {
#     #         "question_number": i + 1,
#     #         "question": q["question"],
#     #         "options": [opt["text"] for opt in q["options"]]
#     #     }
#     #     formatted_quiz.append(formatted_question)
    
#     # # If not enough questions, add some generic ones
#     # while len(formatted_quiz) < 5:
#     #     formatted_quiz.append({
#     #         "question_number": len(formatted_quiz) + 1,
#     #         "question": f"Sample question about {keywords[0]}?",
#     #         "options": [
#     #             "Correct answer",
#     #             "Wrong answer 1",
#     #             "Wrong answer 2",
#     #             "Wrong answer 3"
#     #         ]
#     #     })
    
#     # return jsonify(formatted_quiz)

# @app.route('/check_answers', methods=['POST'])
# def check_answers():
#     # Get user answers from the request
#     user_answers = request.json.get('answers', [])
    
#     # Get the stored quiz from session
#     stored_quiz = json.loads(session.get('quiz', '[]'))
    
#     # Calculate score
#     correct = 0
#     results = []
    
#     for i, question in enumerate(stored_quiz):
#         if i < len(user_answers):
#             is_correct = (user_answers[i] == question['correct_index'])
#             if is_correct:
#                 correct += 1
            
#             results.append({
#                 'question': question['question'],
#                 'is_correct': is_correct,
#                 'correct_index': question['correct_index']
#             })
    
#     score = {
#         'score': correct,
#         'total': len(stored_quiz),
#         'percentage': (correct / len(stored_quiz) * 100) if stored_quiz else 0,
#         'results': results
#     }
    
#     return jsonify(score)

# @app.route('/save_results', methods=['POST'])
# def save_results():
#     # In a real app, you would save the results to a database
#     return jsonify({"success": True})

# if __name__ == '__main__':
#     app.run(debug=True)
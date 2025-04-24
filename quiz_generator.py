import json
import random
from nlp_utils import extract_keywords

def load_question_db(path="question_db.json"):
    """Load questions from JSON database"""
    try:
        with open(path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print("Error: question_db.json file not found. Please ensure the file exists.")
        return None

def generate_quiz(keywords, db, max_q=10):
    """Generate quiz questions based on extracted keywords"""
    quiz = []
    
    # Add questions for each keyword
    for kw in keywords:
        if kw in db:
            # Get all questions for this keyword
            questions = db[kw]
            
            # Create copies of questions to avoid modifying the original database
            questions_copy = []
            for q in questions:
                # Create a copy of the question
                question_copy = q.copy()
                
                # Create a copy of the options and shuffle them
                options = question_copy["options"].copy()
                
                # Before shuffling, identify the correct option
                correct_option = next(opt for opt in options if opt["is_correct"])
                
                # Shuffle the options
                random.shuffle(options)
                
                # Update the question with shuffled options
                question_copy["options"] = options
                
                # Find and store the new index of the correct option
                for i, opt in enumerate(options):
                    if opt is correct_option:  # Compare by reference
                        question_copy["correct_index"] = i
                        break
                
                questions_copy.append(question_copy)
            
            # Randomize question order
            random.shuffle(questions_copy)
            
            # Add to our quiz
            quiz.extend(questions_copy)
    
    # If not enough questions, add some general questions
    if len(quiz) < max_q and "general" in db:
        general_questions = db["general"]
        
        # Create copies and shuffle options
        general_copy = []
        for q in general_questions:
            question_copy = q.copy()
            
            # Create a copy of the options and shuffle them
            options = question_copy["options"].copy()
            
            # Before shuffling, identify the correct option
            correct_option = next(opt for opt in options if opt["is_correct"])
            
            # Shuffle the options
            random.shuffle(options)
            
            # Update the question with shuffled options
            question_copy["options"] = options
            
            # Find and store the new index of the correct option
            for i, opt in enumerate(options):
                if opt is correct_option:  # Compare by reference
                    question_copy["correct_index"] = i
                    break
            
            general_copy.append(question_copy)
        
        random.shuffle(general_copy)
        
        # Add enough general questions to reach max_q
        remaining = max_q - len(quiz)
        quiz.extend(general_copy[:remaining])
    
    # Limit to max_q questions
    quiz = quiz[:max_q]
    
    # Shuffle final quiz
    random.shuffle(quiz)
    
    return quiz

def check_answer(question, user_selection):
    """
    Check if the user's selected answer is correct
    
    Args:
        question: Question object with options
        user_selection: Index of user's selected option
        
    Returns:
        Boolean indicating if answer is correct
    """
    # Check if we have a pre-computed correct_index
    if "correct_index" in question:
        return user_selection == question["correct_index"]
    
    # If not, check the is_correct property
    return question["options"][user_selection]["is_correct"]

def score_quiz(questions, user_answers):
    """
    Score a completed quiz
    
    Args:
        questions: List of question objects
        user_answers: List of user selections (indices)
        
    Returns:
        Dictionary with score information
    """
    correct = 0
    results = []
    
    for i, question in enumerate(questions):
        if i < len(user_answers):
            is_correct = check_answer(question, user_answers[i])
            if is_correct:
                correct += 1
            
            # Get user's answer text
            user_answer_text = question["options"][user_answers[i]]["text"]
            
            # Find the correct answer text
            if "correct_index" in question:
                correct_answer_text = question["options"][question["correct_index"]]["text"]
            else:
                # Find by is_correct property
                correct_answer_text = ""
                for opt in question["options"]:
                    if opt["is_correct"]:
                        correct_answer_text = opt["text"]
                        break
            
            results.append({
                "question": question["question"],
                "user_answer": user_answer_text,
                "correct_answer": correct_answer_text,
                "is_correct": is_correct
            })
    
    return {
        "score": correct,
        "total": len(questions),
        "percentage": (correct / len(questions)) * 100 if questions else 0,
        "results": results
    }

def display_quiz(quiz):
    """Display quiz with properly formatted questions and options"""
    for i, q in enumerate(quiz):
        print(f"**{i+1}. {q['question']}**")
        for j, opt in enumerate(q["options"]):
            print(f"* {opt['text']}")
        print()

def display_results(score_info):
    """Display quiz results in a readable format"""
    print(f"Score: {score_info['score']}/{score_info['total']} ({score_info['percentage']:.1f}%)")
    print("\nDetailed Results:")
    
    for i, result in enumerate(score_info['results']):
        print(f"Q{i+1}: {result['question']}")
        print(f"Your answer: {result['user_answer']}")
        print(f"Correct answer: {result['correct_answer']}")
        print(f"{'✓ Correct!' if result['is_correct'] else '✗ Incorrect'}")
        print()

# Example usage (for testing):
if __name__ == "__main__":
    db = load_question_db()
    if db:
        topics = ["python", "general"]
        quiz = generate_quiz(topics, db, max_q=5)
        
        # Display the quiz
        display_quiz(quiz)
        
        # Print the correct answer indices (for verification)
        print("Correct answer indices:")
        for i, q in enumerate(quiz):
            correct_index = q.get("correct_index")
            if correct_index is not None:
                correct_option = q["options"][correct_index]["text"]
                print(f"Q{i+1}: Index {correct_index} - {correct_option}")
        
        # Get user answers (simulated)
        print("\nEnter your answers (0-3 for each question):")
        user_answers = []
        for i in range(len(quiz)):
            try:
                ans = int(input(f"Question {i+1}: "))
                user_answers.append(ans)
            except:
                # Default to 0 if invalid input
                user_answers.append(0)
        
        # Score the quiz
        score_result = score_quiz(quiz, user_answers)
        
        # Display results
        display_results(score_result)
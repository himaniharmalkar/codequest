# For an advanced implementation, you could use spaCy as shown below:

import spacy
try:
    nlp = spacy.load("en_core_web_sm")
except:
    import subprocess
    subprocess.check_call(["python", "-m", "spacy", "download", "en_core_web_sm"])
    nlp = spacy.load("en_core_web_sm")

def extract_keywords(text, skill_list):
    # Process the text with spaCy
    doc = nlp(text.lower())
    
    # Extract all lowercase tokens that are not stopwords or punctuation
    words = [token.text.lower() for token in doc if token.is_alpha and not token.is_stop]
    
    # Find matching skills
    found = list(set([word for word in words if word in skill_list]))
    
    # Add multi-word skills if they appear in the text
    for skill in skill_list:
        if " " in skill and skill.lower() in text.lower():
            found.append(skill)
    
    return list(set(found))

#a simple way to do the same : (no use of spacy)

# def extract_keywords(text, skill_list):
#     """
#     Extract keywords from text based on a predefined skill list.
#     A more sophisticated implementation would use proper NLP techniques.
#     """
#     text = text.lower()
#     found_skills = []
    
#     for skill in skill_list:
#         if skill.lower() in text:
#             found_skills.append(skill)
    
#     # Return unique skills
#     return list(set(found_skills))

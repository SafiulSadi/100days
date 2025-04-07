from question_model import Question
# from data import question_data
from quiz_brain import QuizBrain


import requests 
import html
from ui import QuizInterface

END_POINT = "https://opentdb.com/api.php"
parameters = {"amount": 10, "type": "boolean"}
response = requests.get(url=END_POINT, params=parameters)
response.raise_for_status()
score = 0


# quiz_ui = QuizInterface()

question_data = response.json()["results"]


question_bank = []
for question in question_data:
    question_text = question["question"]
    question_answer = question["correct_answer"]
    new_question = Question(question_text, question_answer)
    question_bank.append(new_question)


quiz = QuizBrain(question_bank)

# while quiz.still_has_questions():
#     quiz.next_question()

print("You've completed the quiz")
print(f"Your final score was: {quiz.score}/{quiz.question_number}")






# for i in question_bank:
#     print(html.unescape(i["question"]))
#     # print(i["question"])
#     answer = input("Answer:")
#     if(answer == i["correct_answer"]):
#         score += 1
#     print(f"Score: {score}")
#     print(i["correct_answer"])
# # print(results[0]["question"])
# # print(results[0]["correct_answer"])



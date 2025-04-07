import requests 
import html
from ui import QuizInterface

END_POINT = "https://opentdb.com/api.php"
parameters = {"amount": 10, "type": "boolean"}
response = requests.get(url=END_POINT, params=parameters)
response.raise_for_status()
score = 0


quiz_ui = QuizInterface()

results = response.json()["results"]
for i in results:
    print(html.unescape(i["question"]))
    # print(i["question"])
    answer = input("Answer:")
    if(answer == i["correct_answer"]):
        score += 1
    print(f"Score: {score}")
    print(i["correct_answer"])
# print(results[0]["question"])
# print(results[0]["correct_answer"])



import pandas

data = pandas.read_csv("./data/words.csv")
words = data.to_dict(orient="records")
# print(data)
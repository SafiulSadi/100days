import pandas
import numpy

# data = pandas.read_csv("./data/words.csv")
# words = data.to_dict(orient="records")
# print(data[0][0])

# 
arr = numpy.loadtxt("./data/words.csv",
                 delimiter=",", dtype=str)
print(arr)
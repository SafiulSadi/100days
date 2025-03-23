# try:
#     file = open('a.txt', 'r') 
#     x = {"a": "b"}
# except KeyError as e:
#     print('non-existant key')
#     print(e)
# except FileNotFoundError:
#     print("hello")
#     file = open('a.txt', 'w')
#     file.write('something')
    
# else:
#     print('bye')
#     content = file.read()
#     print(content)
    
# finally:
#     raise KeyError('this is a error i made up')



height = float(input("Height: "))
weight = int(input("Weight: "))

if height > 3:
    raise ValueError("human height should not be over 3 meters")

bmi = weight / height ** 2

print(f"your bmi is: {bmi}")
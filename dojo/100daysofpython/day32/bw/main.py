##################### Extra Hard Starting Project ######################
import pandas
import random
import smtplib

import datetime as dt

my_email = "safiul.sadi1@gmail.com"
password = "vuky vcyw htbh qycr"
# password = "rfcglcwobbmhiytq" # outlook
to_email = "safiul.sadi@gmail.com"
# to_email = "paperchief@gmail.com"
port = 587
subject = """Subject:Quote Of The Day"""
birthday_msg = ""
def send_email(quote):
    with smtplib.SMTP("smtp.gmail.com", port) as connection:
        status_code, response = connection.ehlo()
        print(f"Echoing the server: {status_code} {response}")
        connection.starttls()
        connection.login(user=my_email, password=password)
        connection.sendmail(from_addr=my_email, to_addrs=to_email, msg=f"{subject}\n\n{quote}")


now = dt.datetime.now()
print(now)
day_of_the_week = now.weekday()
print(day_of_the_week)

if day_of_the_week < 10 or day_of_the_week == 2 or day_of_the_week == 3:
    with open("quotes.txt") as quotes_file:
        all_quotes = quotes_file.readlines()
        quote = random.choice(all_quotes)
        print(quote)
        send_email(quote)





# with open("birthdays.csv", "r") as birthday_file:
#     pass
# file = pandas.read_csv("birthdays.csv")
# now = dt.datetime.now()

# file[file["month"]==now.month].to_csv("bday.csv", index=None)

# x_file = pandas.read_csv("bday.csv")
# print(x_file[x_file["day"] == 6])
# print(x_file["name"])
# print(f"{x_file["name"].to_string()}, Happy birth day")
# print(f"{x_file["name"].values}, Happy birth day")

# def sendmail(message):
#     TO_EMAIL = "safiul.sadi@gmail.com"
#     FROM_EMAIL = "safiul.sadi1@gmail.com"
#     MY_PASSWORD = "cbmlwdaemjpsfnbm"
#     with smtplib.SMTP("smtp.gmail.com") as connection:
#         connection.starttls()
#         connection.login(user=FROM_EMAIL, password=MY_PASSWORD)
#         connection.sendmail(from_addr=FROM_EMAIL, to_addrs=TO_EMAIL,msg=f"Subject:Happy Birthday.\n\n{message}")


# arr = x_file["name"].values
# for name in arr:
#     # print(f"Happy birthday, {name}")    
#     x = random.randint(1,3)
#     # print(x)
#     with open(f"./letter_templates/letter_{x}.txt", "r") as letter:
#         xrr = letter.readlines()
#         xrr[0] = xrr[0].replace("[NAME]", name)
#         message = "".join(xrr)
#         print(message)
        # sendmail(message=message)
        # for i in xrr:
        #     print(i)


# 1. Update the birthdays.csv

# 2. Check if today matches a birthday in the birthdays.csv

# 3. If step 2 is true, pick a random letter from letter templates and replace the [NAME] with the person's actual name from birthdays.csv

# 4. Send the letter generated in step 3 to that person's email address.

today = (dt.datetime.now().month, dt.datetime.now().day)
# print(today)
data = pandas.read_csv("birthdays.csv")

birthday_dict = {(data_row["month"], data_row.day): data_row for (index, data_row) in data.iterrows()}

TO_EMAIL = "safiul.sadi@gmail.com"
FROM_EMAIL = "safiul.sadi1@gmail.com"
MY_PASSWORD = "cbmlwdaemjpsfnbm"


# print(birthday_dict)
if today in birthday_dict:
    # print(True)
    
    birthday_person = birthday_dict[today]
    file_path = f"./letter_templates/letter_{random.randint(1,3)}.txt"
    with open(file=file_path) as letter_file:
        contents = letter_file.read()
        contents = contents.replace("[NAME]", birthday_person["name"])

    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=FROM_EMAIL, password=password)
        connection.sendmail(from_addr=FROM_EMAIL, to_addrs=birthday_person["email"], msg=f"Subject:Happy Birthday!\n\n{contents}")
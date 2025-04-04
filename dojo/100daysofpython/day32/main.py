# import smtplib

# my_email = "safiul.sadi1@gmail.com"
# test_email = "safiul.sadi@gmail.com"
# my_password = "cbmlwdaemjpsfnbm"




# import datetime as dt
# import random

# quote = ""
# with open("quotes.txt", "r") as quotes_file:
#     quotes = quotes_file.readlines()
#     print(random.choice(quotes))
#     quote = random.choice(quotes)
    
# subject = "Hello"
# body = quote
# message = f"Subject:{subject}\n\n{body}"


# now = dt.datetime.now()
# if now.day == 3:
#     print(quote)
    
#     with smtplib.SMTP("smtp.gmail.com") as connection:
        
#         connection.starttls( )

#         connection.login(user=my_email, password=my_password)
#         connection.sendmail(from_addr=my_email, to_addrs=test_email, msg=message)


#         print("email sending")


# # tylace 1 file


# day_of_the_week = now.weekday()
# print(day_of_the_week)
# # print(now)

# date_of_birth = dt.datetime(year=1992 , month= 5, day=17, hour=10)

# print(now.year-date_of_birth.year)

import smtplib
import datetime as dt
import random 

MY_EMAIL = "safiul.sadi1@gmail.com"
MY_PASSWORD = "cbmlwdaemjpsfnbm"

now = dt.datetime.now()
weekday = now.weekday()

if weekday == 5:
    with open("quotes.txt", "r") as quote_file:
        all_quotes = quote_file.readlines()
        quote = random.choice(all_quotes)
        
    print(quote)

    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=MY_EMAIL, password=MY_PASSWORD)  
        connection.sendmail(from_addr=MY_EMAIL,to_addrs="safiul.sadi@gmail.com", msg=f"Subject:Monday Motivation\n\n{quote}")
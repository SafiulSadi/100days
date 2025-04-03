import smtplib

my_email = "safiul.sadi1@gmail.com"
test_email = "safiul.sadi@gmail.com"
my_password = "cbmlwdaemjpsfnbm"




import datetime as dt
import random

quote = ""
with open("quotes.txt", "r") as quotes_file:
    quotes = quotes_file.readlines()
    print(random.choice(quotes))
    quote = random.choice(quotes)
    
subject = "Hello"
body = quote
message = f"Subject:{subject}\n\n{body}"


now = dt.datetime.now()
if now.day == 3:
    print(quote)
    
    with smtplib.SMTP("smtp.gmail.com") as connection:
        
        connection.starttls( )

        connection.login(user=my_email, password=my_password)
        connection.sendmail(from_addr=my_email, to_addrs=test_email, msg=message)


        print("email sending")




day_of_the_week = now.weekday()
print(day_of_the_week)
# print(now)

date_of_birth = dt.datetime(year=1992 , month= 5, day=17, hour=10)

print(now.year-date_of_birth.year)


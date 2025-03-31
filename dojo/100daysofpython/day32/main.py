import smtplib

my_email = "safiul.sadi1@gmail.com"

connection = smtplib.SMTP("smtp.gmail.com")
connection.starttls( )

print("email sending")
print("finish day 32 of angela's python")
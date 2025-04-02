# import smtplib

# my_email = "safiul.sadi1@gmail.com"
# test_email = "safiul.sadi@gmail.com"
# my_password = "cbmlwdaemjpsfnbm"
# subject = "Hello"
# body = "This is the content of the email."
# message = f"Subject:{subject}\n\n{body}"
# connection = smtplib.SMTP("smtp.gmail.com")
# connection.starttls( )

# connection.login(user=my_email, password=my_password)
# connection.sendmail(from_addr=my_email, to_addrs=test_email, msg=message)


# print("email sending")

# connection.close()

import datetime as dt

n = dt.datetime.now()

print(n)



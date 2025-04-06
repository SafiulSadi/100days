import requests
from datetime import datetime
import smtplib
import time

my_email = "safiul.sadi1@gmail.com"
test_email = "safiul.sadi@gmail.com"
my_password = "cbmlwdaemjpsfnbm"

my_lat = 51.507351
my_long = -0.127758
res = requests.get("http://api.open-notify.org/iss-now.json")
print(res)
res.raise_for_status()

data1 = res.json()

print(data1["iss_position"]["longitude"])
print(data1["iss_position"]["latitude"])

iss_position = (float(data1["iss_position"]["longitude"]), float(data1["iss_position"]["latitude"]))
print(iss_position)

dl = 23.810331
dl = -10.810331
dlng = 90.412521
# dlng = -39.412521

def is_iss_close():
    x, y = iss_position
    if (dl >= x - 5 and dl <= x + 5) and (dlng >= y - 5 and dlng <= y + 5):
        print("iss is here")
        return True
    else:
        return False
    
    
parameters = {
    "lat": my_lat,
    "lng": my_long,
    "formatted": 0,
}
def is_night_time():
    response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
    response.raise_for_status()
    data = response.json()
    time_now = datetime.now().hour
    # print(data["results"]["sunrise"])
    sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0])
    sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0])
    # print(response.json())
    now = str(time_now).split(" ")
    # print(sunrise)
    # print(sunset)
    # print(time_now)
    if time_now >= sunset or time_now <= sunrise:
        return True
    else:
        return False

print(is_iss_close())
print(is_night_time())
while True:
    time.sleep(60)
    if is_iss_close() and is_night_time():
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=my_email, password=my_password)
            connection.sendmail(from_addr=my_email, to_addrs=test_email,msg=f"Subject:Look Up! \n\nThe iss is above you in the sky")
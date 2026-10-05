# ---------------------------------------------------------------------
# PYTHON TIME & DATETIME - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Concepts:
# time: মূলত টাইমস্ট্যাম্প (Timestamp), কোড এক্সিকিউশন টাইম এবং ডিলে (Sleep) মাপার জন্য।
# datetime: মানুষের পড়ার উপযোগী ডেট-টাইম অবজেক্ট, ফরম্যাটিং এবং পার্সিংয়ের জন্য।
# strftime(): Datetime অবজেক্টকে নিজস্ব ফরম্যাটে String-এ রূপান্তর করা (Object -> String)।
# strptime(): কোটেশন বা String ডেটকে আসল Datetime অবজেক্টে রূপান্তর করা (String -> Object)।
# ---------------------------------------------------------------------

import time
from datetime import datetime, date

# === 1. TIME MODULE & CODE EXECUTION TIME ===
# time.time() সেকেন্ড রিটার্ন করে (Epoch থেকে শুরু করে ভগ্নাংশসহ, যা দিয়ে মিলিসেকেন্ড হিসাব হয়)
seconds = time.time()
print(time.ctime(seconds))      # 👉 Output: String Format (e.g., "Mon Oct  5 15:28:00 2026")
print(time.localtime(seconds))  # 👉 Output: Local time object tuple

# কোড এক্সিকিউশন স্পীড বা টাইম ট্র্যাক করার ট্রিক:
start = time.time()
print(23 * 2.3)
end = time.time()
print(f"Execution Time: {end - start} seconds")

# time.sleep(সেকেন্ড): কোড রান করার মাঝে বিরতি বা ডিলে দেওয়া
print("I am a Line")
time.sleep(2)                   # ২ সেকেন্ড কোড পজ বা থেমে থাকবে
print("I'm another line")       # ২ সেকেন্ড পর এটি প্রিন্ট হবে


# === 2. DATETIME BASICS & TIMESTAMPS ===
print(datetime.now())           # বর্তমান লোকাল ডেট ও টাইম
print(date.today())             # শুধুমাত্র আজকের ডেট (Year-Month-Day)

# টাইমস্ট্যাম্প থেকে ডেট বের করা:
random_date = date.fromtimestamp(123456789)
print(random_date.year, random_date.month, random_date.day)


# === 3. DATETIME TIMETUPLE ELEMENTS ===
# datetime অবজেক্টকে ইন্ডেক্সিং বা টাপলে ভেঙে ফেলার ট্রিক [০ থেকে ৮ পর্যন্ত ইনডেক্স]
current_time = datetime.now()
time_tuple = current_time.timetuple()

print(time_tuple[0])            # 👉 Year
print(time_tuple[1])            # 👉 Month
print(time_tuple[2])            # 👉 Day
print(time_tuple[3])            # 👉 Hour (পরের গুলো যথাক্রমে: ৪=Min, ৫=Sec)


# === 4. DATE TO STRING FORMATTING (strftime) ===
# %d = Day, %m = Month(01-12), %Y = Year(4 digit), %B = Month Name, %H:%M:%S = Hour:Min:Sec
now = datetime.now()
formatted_string = datetime.strftime(now, "%d/%m/%Y  %H:%M:%S")
print(formatted_string)         # 👉 Output: "05/10/2026  15:28:00"


# === 5. STRING TO DATE PARSING (strptime) ===
# কোনো টেক্সট বা স্ট্রিং ডেটাকে কোডের কন্ডিশন বা ডেটাবেজে ব্যবহারের জন্য অবজেক্টে রূপান্তর:
book_date_str = "03, March, 2023"
actual_date_obj = datetime.strptime(book_date_str, "%d, %B, %Y")
print(actual_date_obj)          # 👉 Output: 2023-03-03 00:00:00
# ---------------------------------------------------------------------



============================================================================================

# import time 

# print(time.time()) # give me the milisecond

# second = time.time()

# print(time.ctime(second)) # time in string formate

# print(time.localtime(second)) # local time formate

# print("I am a Line")

# time.sleep(2) # take value as second

# print("I'm another line") # after 2 second then this line will be executed
# ================================================================================================

# import datetime

# print(datetime.datetime.now())
# print(datetime.datetime.utcnow())
# print(datetime.date.today())

# randomDate = datetime.date.fromtimestamp(123456789)
# print(randomDate.day)
# print(randomDate.month)
# print(randomDate.year)

#==================================================================================
# import time

# start = time.time()

# print(23*2.3)

# end = time.time()
# print(end - start)
#==============================time tuple => '[0] to [8]'====================================================

# import datetime

# current_date_time = datetime.datetime.now()
# # print(current_date_time)

# structed_time_obj = current_date_time.timetuple()

# print(structed_time_obj[0]) # year
# print(structed_time_obj[1]) # month
# print(structed_time_obj[2]) # day
# print(structed_time_obj[3]) # hour , then => min , sec , .... see on google ...
#==============================date formate====================================================
# from datetime import datetime

# currentTime = datetime.now()
# print(currentTime)

# #date/mon/year strftime()

# print(datetime.strftime(currentTime,"%d/%m/%Y  %H:%M:%S"))

#==============================date formate string====================================================

from datetime import datetime

book_creation_date = "03, March, 2023"

book_creation_actualTime = datetime.strptime(book_creation_date, "%d, %B, %Y")

print(book_creation_actualTime)

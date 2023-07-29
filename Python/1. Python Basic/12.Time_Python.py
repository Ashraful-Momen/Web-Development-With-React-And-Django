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

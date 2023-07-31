# import os

# path = "./13. File - Python"  #write down the correct file location...

# all_file = os.listdir(path)

# # print(all_file)

# # 1. read file way of 1:

# for files in all_file:
#     if os.path.isfile(os.path.join(path, files)):
#         print("{} is a file ".format(files))




# os.scandir() : another way to read a file : ---------------------------------------------

# path = "./13. File - Python"  #write down the correct file location...
# all_file = os.scandir(path)

# for files in all_file:
#     if files.is_file():
#         print("{} is a file".format(files))
        
# 3rd way to read file : ------------------------------------

# import pathlib 

# path = "./13. File - Python"  #write down the correct file location...
# path_obj = pathlib.Path(path) 

# for file in path_obj.iterdir():
#     if file.is_file():
#         print(file.name)
#====================================File access methods (“r”, “w”, “a”, etc)===============================
'''
r = read , r+= read+write
w = write, w+= write + read
a = append/ write with exiting element . a+= read+append

'''

#===========================file read================================

# file=open('text1.txt', 'r')

# print(file.read())

# file.close()
#===========================file read: line by line================================
# file=open('text1.txt', 'r')

# print(file.readline())
# print(file.readline())
# print(file.readline())

# file.close()

# ------------------------read line by line with while loop ---------------------------

# file=open('text1.txt', 'r')
# while True:
#     line = file.readline()
#     if not line:
#         break
#     print(line)

#------------------------file close => with / file.close() ---------------------------
#*** with => work as file.close().

# with open("text1.txt", "r") as file:
#     print(file.read())

#===========================file write: w => overwirte in the file / 'a' write after exiting content================================

# with open('text1.txt','w') as file:
#     file.write("\' w\' write in write mode and previous content will be vinish")

# with open('text1.txt','a') as file:
#     mylist=['\n this is the txt1', '\n this is the text 2 ', '\n this is the text 3']
#     file.write("\' w\' write in write mode and previous content will be vinish")
#     file.writelines(mylist)
    
# ==========================================check file : exit ======================================

# import os 

# path = 'text1.txt'

# print(os.path.isfile(path))


# ----------------------------another way to check the file exit or not=============================


# import pathlib

# path = 'text2.txt'

# file= pathlib.Path(path)

# print(file.is_file())

# ----------------------------delete file =============================

# import os  

# path = 'text3.txt'

# if os.path.isfile(path):
#     print(path)
#     os.remove(path) #*** this is the main code ....

# ----------------------------delete folder =============================

import os

# dir = './A'


#delete emty folder: 
# if os.path.dirname(dir):
#     print(dir)
#     os.removedirs(dir)


#delete non empty folder: 

import shutil
dirWithFile = './B'
if os.path.dirname(dirWithFile):
    print(dirWithFile)
    shutil.rmtree(dirWithFile)
    # os.removedirs(dirWithFile)

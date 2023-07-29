import os

path = "./13. File - Python"  #write down the correct file location...

all_file = os.listdir(path)

# print(all_file)

# 1. read file way of 1:

for files in all_file:
    if os.path.isfile(os.path.join(path, files)):
        print("{} is a file ".format(files))




# os.scandir() : another way to read a file : ---------------------------------------------

all_file = os.scandir(path)

for files in all_file:
    if files.is_file():
        print("{} is a file".format(files))
        
# 3rd way to read file : ------------------------------------

import pathlib 

path_obj = pathlib.Path(path) 

for file in path_obj.iterdir():
    if file.is_file():
        print(file.name)
#====================================File access methods (“r”, “w”, “a”, etc)===============================

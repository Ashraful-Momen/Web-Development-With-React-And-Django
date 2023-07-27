# info = {'name':'Karan', 'age':19, 'eligible':True}
# print(info) 
# print(info.keys())
# print(info.values())

# for key in info.keys():
#   print(f"The value corresponding to the key {key} is {info[key]}")

# print(info.items()) #Output=> dict_items([('name', 'Karan'), ('age', 19), ('eligible', True)])

# for key, value in info.items():
#   print(f"The value corresponding to the key {key} is {value}") 

# ------------------------------------------Dictionary Method: ------------------------------------------

# info = {'name':'Karan', 'age':19, 'eligible':True}
# print(info)

# info.update({'age':20})
# info.update({'DOB':2001})
# print(info)

# info = {'name':'Karan', 'age':19, 'eligible':True}
# info.clear()
# print(info)

# info = {'name':'Karan', 'age':19, 'eligible':True}
# info.pop('eligible')
# print(info)

# info = {'name':'Karan', 'age':19, 'eligible':True, 'DOB':2003}
# info.popitem()
# print(info)

# info = {'name':'Karan', 'age':19, 'eligible':True, 'DOB':2003}
# del info['age']
# print(info)


# info = {'name':'Karan', 'age':19, 'eligible':True}
# # get()	Returns the value of the specified key.

# print(info.get('name'))
-----------------------------------------------------------------
course = {
    1:{
        "name":"A",
        "id":101
    },
    2:{
        "name":"B",
        "id":102
    }
}

print(course)

print(course[1]["name"])

course[1]["id"]=105
print(course[1]["id"])

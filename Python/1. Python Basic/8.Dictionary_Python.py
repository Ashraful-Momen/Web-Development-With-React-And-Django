# ---------------------------------------------------------------------
# PYTHON DICTIONARIES - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Rules: Key-Value pairs, Ordered (from Python 3.7+), Changeable,
# and does NOT allow duplicate Keys (Keys must be unique).
# ---------------------------------------------------------------------

# 1. Basic Setup & Declarations
# Declared using curly braces {} or created dynamically using dict(zip())
info = {'name': 'Karan', 'age': 19, 'eligible': True}

# Alternative Declaration: Creating a dict using zip()
variable = dict(zip(['key'], ['value']))  # 👉 Result: {'key': 'value'}

# 2. Reading Data (Keys, Values & Items)
print(info.get('name'))  # 👉 Output: Karan (Safely returns value of specified key)
print(info.keys())       # 👉 Output: dict_keys(['name', 'age', 'eligible'])
print(info.values())     # 👉 Output: dict_values(['Karan', 19, True])
print(info.items())      # 👉 Output: dict_items([('name', 'Karan'), ('age', 19), ('eligible', True)])

# 3. Iterating / Looping through Dictionaries
# Method A: Looping using keys()
for key in info.keys():
    print(f"Key: {key} -> Value: {info[key]}")

# Method B: Looping cleanly using items() for both key and value
for key, value in info.items():
    print(f"Key: {key} -> Value: {value}")

# 4. Dictionary CRUD & Methods
info = {'name': 'Karan', 'age': 19, 'eligible': True}

# Update / Add Items:
info.update({'age': 20})   # 👉 Modifies existing key 'age' to 20
info.update({'DOB': 2001})  # 👉 Adds a completely NEW key-value pair

# Deleting / Removing Items:
info.pop('eligible')       # 👉 Removes specific key 'eligible' and returns its value
info.popitem()             # 👉 Removes and returns the LAST inserted key-value pair
del info['age']            # 👉 Permanently deletes key 'age' using the del keyword
info.clear()               # 👉 Empties the entire dictionary, leaving it as {}

# 5. Nested Dictionaries (Dictionary inside a Dictionary)
course = {
    1: {"name": "A", "id": 101},
    2: {"name": "B", "id": 102}
}

# Accessing Nested Value:
print(course[1]["name"])   # 👉 Output: A

# Updating Nested Value:
course[1]["id"] = 105      # 👉 Changes id of course 1 from 101 to 105
# ---------------------------------------------------------------------
















# ------------------------------- My Note ---------------------------

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

varible = dict(zip(['key'],['value'])) #declear Dictionary.

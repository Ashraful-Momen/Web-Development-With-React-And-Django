my_list = [1,2,3,4,5,6,7,8,9,10]

# firstVaribale, *secondVaribale, lastVariable = my_list # value assign technique...

# print(firstVaribale)
# print(lastVariable)
# print(*secondVaribale)

# ----------------------------------------

# *firstVaribale,secondVaribale,lastVariable=my_list

# print(firstVaribale)
# print(lastVariable)
# print(secondVaribale)
# ----------------------------------------

firstVaribale,secondVaribale,*lastVariable=my_list

print(firstVaribale)
print(lastVariable)
print(secondVaribale)

# ----------------------------some useful method for sequence : list, tuple, range(start,upto,step): in, not in , is => compare with id(memory location)---------------------
 
#  trinary operator =>

# Example 3 (using ternary operator in an assignment)
a = 5
b = 10
max_value = a if a > b else b
print(max_value)  # Output: 10 (since b is greater than a)
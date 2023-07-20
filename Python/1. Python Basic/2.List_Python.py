#1. A list is a collection of items => []
#2. List are used to store muliple variable in single variable.
#3. List are ordered , changable/ mutable, and duplicate values allow.

# -------------------------------------------List---------------------------------------------------
# my_list = ["a","b","c", [1,3,4,],1.34,2.55]

# print(my_list)

# print(my_list[-1])
# print(my_list[-2])
# print(my_list[-3])
# -----------------------------change list items------------------------------------------------------
# my_list[0]="A"
# print(my_list)
# -----------------------------remove list items------------------------------------------------------

# vowel= ['a','e','i','o','u']

# del vowel[0]

# print(vowel)

# vowel.remove('e')

# print(vowel)

# vowel.pop() # remove item from last index.

# print(vowel)

# vowel.pop(0) #use index number for removing the items

# print(vowel)
# -----------------------------------------list use slice--------------------------------------------

# list[start:end:step]

# num = [0,1,2,3,4,5,6,7,8,9]


# print(num[:9])
# print(num[1:9])
# print(num[1:9:2])

#list reverse printing----------------------------------------

# print(num[-1:-11:-1]) #for reverse printing must be used step.
# print(num[-1::-1]) 

# -------------------------------------list sorting : list.sort(), list.sort(reverse=True) , sorted(list),sorted(list,reverse=True) -------------------------------------------------

# number = [3,4,65,2,8,3,4,1]
# number.sort()
# print(number)

# number.sort(reverse=True)
# print(number)

# sorted(number)
# print(number)


# print(sorted(number)) #sorted() use in print function either not working
# print(sorted(number,reverse=True))
# -------------------------------------------List: list.copy, list(iterable), list[:]---------------------------------------------------
# number = [1,2,3,4,5,6,7]

# number2= number.copy()
# print(number2)

# number2= list(number)
# print(number2)

# number2= number[:] #copy element in slicing ....
# print(number2)
# -------------------------------------------List join: number1+number2, list.extend(another_list)---------------------------------------------------
# number1 = [1,3,4,5]
# number2 = [6,7,8,9]

# marge_list = number1 + number2
# print(marge_list)

# char = ['a','b','c']

# marge_list.extend(char)
# print(marge_list)


# -------------------------------------------List element exit: in , not in---------------------------------------------------
# number1 = [1,3,4,5]
# number2 = [6,7,8,9]

# print(2 in number1) #False:2 is not exit
# print(2 not in number1) #True: 2 is not exit in number1 list.

# -------------------------------------------List: list.append(),pop(),reverse(),insert(index,"item"),count('item'),remove(),clear(),NewList=list.index(3)---------------------------------------------------

# furit_busket=['apple','banana','mango']

# furit_busket.append('lici') #add element in last item
# print(furit_busket)

# furit_busket.remove('lici') 
# print(furit_busket)

# furit_busket.insert(2,'lici') # add element in index ways
# print(furit_busket)
# furit_busket.insert(4,'lici') # add element in index ways
# print(furit_busket)

# print(furit_busket.count("lici")) #count item inside list.

# print(furit_busket)

# furit_busket2 = furit_busket.index('mango')
# print(f'{furit_busket2}: this is the mango element index that store in furits_busket2 ')



# -------------------------------------------List: Previous Code---------------------------------------------------
# item=['c','c++','java','python',"javascript"]

# print(item)
# print(item[-1])
# print(item[2:])

# print("python" in item)
# print("go" in item)
# print("go" not in item) ## in and 'not in' is a boolean oparetor

# print(item + ['shuvo',38]) #add item

# print(item*5)
#-------------------------------List function------------------#
# item.append("Momen")
# print(item)
# item.insert(2,"ruby")
# item.remove("java")
# item.sort()
# item2=[1,4,0,3,4]
# item2.reverse()
# print(item2)
# print(item2.count(4))
# item2.sort()
# print(item2)
# pos =item2.index(3)
# print(f"{3}: it's the item index position is {pos}")
# item2.pop(3)
# print(item2)





# -------------------------------------------List: chatgpt---------------------------------------------------
# The list.index(x[, start[, end]]) method in Python is used to find the index of the first occurrence of element x in the list. Optionally, you can specify the start and end parameters to search within a specific range of the list. If the element is not found, it raises a ValueError.

# Here's a Python code implementing the list.index() method:

# python
# Copy code
# def custom_index(lst, x, start=0, end=None):
#     """
#     Find the index of the first occurrence of 'x' in the list 'lst',
#     between the optional start and end indices (inclusive).

#     Parameters:
#         lst (list): The list to search in.
#         x: The element to find the index of.
#         start (int): The index to start the search from. Default is 0.
#         end (int): The index to end the search at (inclusive). Default is None.

#     Returns:
#         int: The index of the first occurrence of 'x' in the list.

#     Raises:
#         ValueError: If the element 'x' is not found in the specified range.
#     """
#     # Handle the default value of 'end'
#     if end is None:
#         end = len(lst) - 1

#     # Ensure start and end values are within the list boundaries
#     start = max(start, 0)
#     end = min(end, len(lst) - 1)

#     # Search for the element 'x' within the specified range
#     for i in range(start, end + 1):
#         if lst[i] == x:
#             return i

#     # If element 'x' is not found, raise ValueError
#     raise ValueError(f"{x} is not in list")

# # Example usage:
# my_list = [10, 20, 30, 40, 50, 30, 60]
# element_to_find = 30
# start_index = 2
# end_index = 5

# try:
#     index = custom_index(my_list, element_to_find, start_index, end_index)
#     print(f"The index of {element_to_find} in the list is: {index}")
# except ValueError as e:
#     print(e)
# In this example, custom_index() is a function that replicates the behavior of list.index() method. It searches for the element x in the list lst, starting from index start and ending at index end. If the element is found, it returns the index; otherwise, it raises a ValueError.
# -------------------------------------------List---------------------------------------------------


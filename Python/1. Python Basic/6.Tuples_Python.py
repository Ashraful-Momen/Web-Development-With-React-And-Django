#Tuples: ordered , immutable/ unchangeble, duplicate allow . 
#tuple = tuple( ) , to convert tuple  use tuple() , and to convert list => list( )
#tuple = also kinds of array , so that we can access element by index number .

#**** for CRUD oparetion of tuple must be convert to list for Crud then again convert to tuple.


# -------------------------------Tuple------------------------------------------

# tuple = ("a",'b','c',1,32,4,[2,4,5])

# print(type(tuple))
# print(tuple)
# print(tuple[-1])


# -------------------------------Tuple CRUD------------------------------------------

# copy => list.copy(), list(listName), list[:], 
# add => list.append() , list.insert(), list.[index] = value...
# update => insert(index, "value"), append()
# delete => del list[index] , list.remove('element')


#create => 

# obj = ('a','b','c')
# obj = list(obj)
# print(obj)

# #add=>
# obj.append(1)
# obj.append(2)
# obj.append(3)
# print(obj)

# #update => 

# obj[0] = "A"
# print(obj)

# #delete =>

# del obj[5]
# obj.remove(2)
# print(obj)

# objTuple = tuple(obj)
# print(type(objTuple))
# print(objTuple)
# ----------------------Loop on tuple--------------------------------------------------

# furit = ("mango", "apple" , "banana" , "lici")

# for i in range(0,len(furit)):
#     print(furit[i])

# ----------------------Join on tuple--------------------------------------------------

even = [2,4,6,8]
odd = [1,3,5,7]

number = even + odd  
print(number)
# ------------------------------check the size and convert tuple to list according to index.-----------------------------------------
import sys 

print(sys.getsizeof(number),"byte") # 

i1,*i2,i3 = number

print(i1) #first element of number tupele that convert to list , index 1
print(i3) # element to 3rd 
print(i2) # 1st element to 3rd element *2 = 6 element , that convert to list....




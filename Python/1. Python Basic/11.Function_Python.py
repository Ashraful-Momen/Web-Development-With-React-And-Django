#Function:

# def sum(a,b):
#     return a+b
# def sub(a,b):
#     return a+b
# def mul(a,b):
#     return a+b
# def dev(a,b):
#     return a+b
# def display(ans):
#     print("your ans is ",ans)


# display(sum(2, 2))
# display(sub(2, 5))
# display(mul(2, 5))
# display(dev(2, 9))
# ##==================

# def large(a,b):
#     if a > b:
#         return a
#     else:
#         return b
# max = large
# print(max(2,4))

#=============#xarg is working as(tuple ) for same data type oparetion=============================

# def sum (*num):
#     add=0
#     for x in num:
#         add=add+x
    
#     print(add)
    
# sum(20,30)

#========================#xxarg: working as dictionary : need keyvalue to print===================

# def student(**details):  
#     print(details["id"])
#     print(details["name"])
# student(id=101,name="Shuvo")
# student(id=102,name="Ashraful",aname="Shuvo")

#==========================lamda or closer function ===============================
# def suqar(x):
#     return x*x

# print(suqar(2))

# # lamda peramiter: expression (value,value,.....)

# cube =  (lambda x : x * x * x ) (2)
# print(cube)

# #a+b*2
# print((lambda a,b: a*a+2*a*b+b*b)(2,2))

# print((lambda x: x*x )(2))

#=======================map & filter===================================

# def square(x):
#     return x*x

# num=[1,2,3,4]

# result = list(map(square, num)) #map => (functin,list) . not use f "()" bracket
# print(result)

# #=========== filter (f(),list)======== if the condition not matchi in list that's will remove

# print(num)

# ans = list(filter(lambda x : x%2==0, num))

# print(ans)
# ==============================Comprehensive=========================================
#================alter native map () : 1 line===========
#
num=[1,2,3,4,5]

#result = [condition for x in list]
result = [x*x for x in num]
print(result)

#===================== alternative filter (): 1 line============

num=[1,2,3,4,5]

#result = [condition for x in list]
result = [x for x in num if x%2==0]
print(result)
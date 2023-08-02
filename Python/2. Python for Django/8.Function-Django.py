
#fname,lname = parameter
#agrument = 'shuvo', 'momen' value.

# def name(fname,lname): 
#     print(f"hello {fname} {lname}")


# name('shuvo','momen')

# =====================================Arbitary Arguments: Tuple()================
# def anyValueTuple(*args):
#     print(args)
#     print(args[2])
    
# anyValueTuple(True,2, 'Bangla', 22.22, 1)
# =======================================Arbitrary Keyword Arguments (**kwargs): take value as dictionary===========================

# def name(fname,lname): 
#     print(f"hello {fname} {lname}")


# name(fname='shuvo',lname='momen') # keyword fname => argument= 'shuvo'.

# ============================================================================
# def name(**kwargs): 
#     print(f"hello {kwargs['fname']} {kwargs['lname']}")


# name(fname='shuvo',lname='momen')
# ============================================================================
# def name(*args,**kwargs): 
#     print(f"hello {kwargs['fname']} {kwargs['lname']}")
#     print(args,kwargs)


# name(True,2,'shuvo',fname='shuvo',lname='momen')



# ===================================Lamda: closer/anonimus function===========================================

# # function
# def add(x, y):
#     return x + y

# # lambda function
# # Anonymous function
# # IIFE
# print((lambda x, y: x + y)(10, 15))

# multiplication = lambda a,b:a*b

# print(multiplication(10,2))

# ===================================map( function,sequence(list/tup/set/dic/range) ) : return 'all element of list/dic/tup/set' ===========================================

# map function
# def func(n):
#     return n*n*n

# l = [3, 4, 1, 0, 6]

# newL = list(map(lambda n: n*n*n, l)) # newL = [n*n*n for n in l]

# l = ['Simanta', 'Bohubrihi', 'Dhaka']

# l2 = list(map(list, l))

# print(l2)

# ===================================filter( function,sequence(list/tup/set/dic/range) ) : return 'if the element satisfied the condition , those element only list/dic/tup/set' ===========================================

# mylist = [3, 4, 1, 0, 6]

# def func(num):
    
#     if num%2 ==0:
#         return num*num

# newList = list(filter(func,mylist)) # filter( return only few element which is satisfied the condition but map return all emenets)

# anotherList = list(filter(lambda ))

# print(newList)

# ===================================reduce( function,sequence(list/tup/set/dic/range) ) : sum/multiplication/division/other operation works on whole array element and return => total sum/mul/div/sub/other operation result ===========================================

# from functools import reduce
# myList = [1,2,3,4,5,6,7,8,9,10]

# def totalSum(x,y):
#     return x+y 

# # sumOfList = reduce(totalSum,myList)

# sumOfList = reduce(lambda x,y:x+y , myList) # work as fibo then return total sum....

# print(sumOfList)
# =========================================================higher order function(): pass any functio to other function as params===================

# def higherOrderFn(fn):
#     print("the function name is : ",fn.__name__)
#     fn()
    
# def hello():
#     print("Hello Bangladesh")

# higherOrderFn(hello)



# myList = [1,2,3,4,5,6,7,8,9,10]

# def newFun(fn,myList):
#     newList=[]
#     for i in myList:
#         if fn(i):
#             newList.append(i)
#     return newList
            

# # newList = list(filter(lambda x:x%2==1, myList))
# newList = newFun(lambda x:x%2==1,myList)

# print(newList)

# =======================================Wrapper function of decorator==================================
# Higher Order Function -> Accepts function as argument or returns function

# Wrapper
def myWrapper(fn):
    def test():
        print("I am from test! Before")
        fn()
        print("I am from test! After")

    return test

# Decorators
@myWrapper
def greet():
    print("Hello world!")

@myWrapper
def hello():
    print("Hello Hello")

# hello = myWrapper(hello)
#greet()
hello()
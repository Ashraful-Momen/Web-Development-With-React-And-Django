# def my_fun():
#     print("Hello World")
    
# def print_myfn(fun):
#     fun()
#     print("Hello print_myfn")
    
# print_myfn(my_fun)
# =======================innner function return===========================


def greet (name):
    def hello():
        return "My Name is "+name
    return hello() #function return <-------call the fun here with () 

print(greet("Ashraful")) 

# def greet (name):
#     def hello():
#         return "My Name is "+name
#     return hello #function return <------ return only the function not call here 

# print(greet("Ashraful")()) <----------- the blank () , call the function for hello() .
# =======================Decorator core concept===========================

def greet(fn):
    def inner():
        fn()
        print("this is from inner function")
    return inner

@greet #another short way to call decorator: @greet function take the hello() function and modify / decorate .
def hello():
    print("This is from hello function")

# greet(hello)() #decorator fn calling

# hello() #

# -----------------------------------------decorator with params-------------------------


def zeroDivisionError(fn):
    def inner(a,b): # this -> a,b value take from divided(a,b)
        
        if b==0:
            return print("Zero Division Error!")
        return fn(a,b)
    return inner

@zeroDivisionError
def divided(a,b):
    return print(a/b)

divided(10,2)
divided(10,4)

divided(10,0)






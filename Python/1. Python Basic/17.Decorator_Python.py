# def my_fun():
#     print("Hello World")
    
# def print_myfn(fun):
#     fun()
#     print("Hello print_myfn")
    
# print_myfn(my_fun)
# =======================innner function return===========================

# def greet (name):
#     def hello():
#         return "My Name is "+name
#     return hello #function return

# print(greet("Ashraful")()) 
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

hello() #

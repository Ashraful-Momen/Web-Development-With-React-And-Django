# a = input("Enter the number: ")
# print(f"Multiplication table of {a} is: ")
# try:
#   for i in range(1, 11):
#     print(f"{int(a)} X {i} = {int(a)*i}")
# except Error as e:
#     # print(e)
#     print("Invalid  Input!")

# print("Some imp lines of code")
# print("End of program")
# -----------------------------------------------------------------------
# try:
#     num = int(input("Enter an integer: "))
# except ValueError:
#     print("Number entered is not an integer.")
# ----------------------------------------------------------------------

# try:
#     num = int(input("Enter an integer: "))
#     a = [6, 3]
#     print(a[num])
# except ValueError:
#     print("Number entered is not an integer.")
    
# except IndexError:
#   print("Index Error")
# ----------------------------------------------------------------------
# def func1():
#   try:
#     l = [1, 5, 6, 7]
#     i = int(input("Enter the index: "))
#     print(l[i])
#     return 1
#   except:
#     print("Some error occurred")
#     return 0

#   finally:
#     print("I am always executed")
#   # print("I am always executed")


# x = func1()
# print(x)
# ----------------------------------------------------------------------

try: 
     list = [10,0,3]
     ans = list[0]/list[3] # ZeroDivisionError: division by zero
     print(ans) # after error this line is not exectuded


except (ZeroDivisionError,IndexError) as all :
    print("Dividing by zero is not possible or index of range")




finally: 
    print("Must be print this line if those error isn't handle yet!")
    print(" ")
'''except ZeroDivisionError :
    print("Dividing by zero is not possible")
except IndexError :
    print("list index out of range")'''
try: 
    def voter(age):
        if age<18:                      # raise: if the condition is false the executed it
                                    # if the condition is true

            raise ValueError("your age is not valid for voting")
        return "you are valid for voting"
except ValueError as e:
    print("value error is printing in Here") 
print(voter(17))

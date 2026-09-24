# ---------------------------------------------------------------------
# PYTHON EXCEPTION HANDLING - QUICK CHEAT SHEET
# ---------------------------------------------------------------------
# Core Concepts: 
# try: এরর আসতে পারে এমন কোড এখানে থাকে।
# except: এরর আসলে কোড ক্র্যাশ না করে এখানে এসে হ্যান্ডেল হয়।
# finally: এরর আসুক বা না আসুক (এমনকি return করলেও) এই ব্লক রান হবেই।
# raise: নিজের ইচ্ছেমতো কাস্টম এরর বা এক্সেপশন তৈরি (throw) করা।
# ---------------------------------------------------------------------

# 1. Basic Try-Except (মৌলিক এক্সেপশন হ্যান্ডেলিং)
try:
    num = int(input("Enter an integer: "))
except ValueError:
    print("ValueError: Number entered is not an integer.")

# 2. Catching Multiple Specific Errors (আলাদা আলাদা এরর ধরা)
try:
    num = int(input("Enter index: "))
    a = [6, 3]
    print(a[num])
except ValueError:
    print("Invalid Input! Must be an integer.")
except IndexError:
    print("Index Error! Index out of range.")

# 3. Catching Multiple Errors in One Line (এক লাইনে একাধিক এরর)
try: 
    my_list = [10, 0, 3]
    ans = my_list[0] / my_list[3]  # Can cause IndexError or ZeroDivisionError
except (ZeroDivisionError, IndexError) as error_msg:
    print("Caught an error: Dividing by zero OR index out of range!")

# 4. Tricky Way: Dynamic Error Name Show (সব ধরনের অজানা এরর ধরার ট্রিক)
# Exception as e ব্যবহার করে যেকোনো এররের আসল নাম (Type) ও মেসেজ প্রিন্ট করা:
try:
    # Any risky code here
    result = 10 / "a"
except Exception as e:
    print(f"Error occurred: {type(e).__name__} - {e}")
    # 👉 Output: Error occurred: TypeError - unsupported operand type(s)...

# 5. The Golden Rule of 'finally' (রিটার্ন থাকলেও কাজ করবে)
# ফাংশনের ভেতর 'try' বা 'except' ব্লকে return 1 বা return 0 থাকলেও, 
# ফাংশনটি শেষ হওয়ার ঠিক আগে 'finally' ব্লক অবশ্যই এক্সিকিউট হবে।
def check_finally():
    try:
        l = [1, 5, 6]
        return l[0]
    except IndexError:
        return 0
    finally:
        print("I am always executed!") # 👉 এটি সবসময় প্রিন্ট হবেই!

# 6. 'raise' Keyword: Triggering Custom Errors (নিজে থেকে এরর তৈরি করা)
# কোনো নির্দিষ্ট কন্ডিশন না মিললে কোড থামিয়ে এরর মেসেজ দেখানোর জন্য raise ব্যবহৃত হয়।
age = 15
if age < 18:
    raise ValueError("Your age is not valid for voting")
    # 👉 Output: ValueError: Your age is not valid for voting

# 7. Handling Raised Errors inside Try-Except
# raised এররকে আবার try-except দিয়ে রিলিজ বা হ্যান্ডেল করা যায়:
try:
    def voter(age):
        if age < 18:
            raise ValueError("Invalid age for voting")
        return "Valid voter"
    
    print(voter(17))
except ValueError as e:
    print(f"Caught a raised error: {e}")
# ---------------------------------------------------------------------





---------------------------------------------------- My Note ---------------------------------------

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

#---------------------------------- Tricky way to show the error msg--------------------------------------

def func1():
    try:
        l = [1, 5, 6, 7]
        i = int(input("Enter the index: "))
        print(l[i])
        return 1
    
    except IndexError:
        print("IndexError: List index out of range!")
        return 0
    
    except ValueError:
        print("ValueError: Invalid input! Please enter a number.")
        return 0
    
    except Exception as e:
        print(f"Error occurred: {type(e).__name__} - {e}")
        return 0
    
    finally:
        print("I am always executed")

# Test the function
x = func1()
print(x)
# ----------------------------------------------------------------------
# a = int(input("Enter any value between 5 and 9"))

# if(a<5  or a>9):
#   raise  ValueError("Value should be between 5 and 9")
# ----------------------------------------------------------------------
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


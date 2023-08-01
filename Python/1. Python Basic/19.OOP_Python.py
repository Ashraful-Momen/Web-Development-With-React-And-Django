# class Persion:
    
#     college_name = "Bangladesh Navy College"
    
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age
        
#     def display(self):
#         print("Your name is {}".format(self.name))
        
#     @classmethod
#     def school_name(cls):
#         return print(cls.college_name)

#     @staticmethod     #as normal function
#     def University_name(name):
#         return print(name)

# obj1 = Persion("Shuvo", 27)

# obj1.display()

# Persion.school_name() #for calling => className.classMethod()

# Persion.University_name("Bangladesh University") # class Persion.staticMethod()

# ==========================================time utility manager==============================
import datetime

class TimeUtilityManager:
    
    @staticmethod
    def currentTime():
        return datetime.datetime.now()
    
    @staticmethod
    def differenceTime(date_from):
        return datetime.datetime.now() - date_from

# print(TimeUtilityManager.currentTime())

# current_date = datetime.datetime(2019, 3, 3)

# print(TimeUtilityManager.differenceTime(current_date))

# ==========================================inheritance: issubclass(), isinstance()=========================================

'''
1. super class, Parent class, Base class => sub class, Child class , Derive Class.
***if super class has any __init__ then sub_class need to declear the super class __init__

'''



#Inheritence Practise:
class A:
    def display1(self):
        print("I am A class")
        
class B(A):
    def display2(self):
        print("I am B class")
        A.display1(self)
        
class C(B):
    def display3(self):
        print("I am C class")
        
class W(C , B, A):
    def display(self):
        print("I am for checking Inheritance !")
    
object = W()
object.display2()
# ===============================================================
# class A:
#     a= 10
#     def showvalue(self):
#         self.c = self.a * self.a
#         print(self.c)
#     def add(self,a,b):
#         print(a+b)

        
# obj = A()
# obj.showvalue()
# obj.add(2,3)
# ===============================================

# class Phone:
#     def __init__(self):
#         print("I am from Phone Class")

# class Xiaomi(Phone):
#     def __init__(self):
#         print("I am from Xiaomi Class")
#         super().__init__() # class the Phone class __init__

# obj = Xiaomi()
# ================================================
# ===============================================

# class Student:

#     def set_value(self,name,roll):
#         self.name=name
#         self.roll=roll
#     def display(self):
#         return print(f"Name : {self.name} and Roll: {self.roll}")
    
# obj = Student()
# obj.set_value("Ashraful", 201811050038)
# obj.display()
# ===============================================
# ===============================================
#****** __variableName = is a private access modifier that useable inside class only ... no ther class can use it

#Encapsulation : getter and setter ===>
# class A:
#     __name="Shvuo"

#     def __display(self):
#         print("Welcome Bangladesh")
        

#     def __init__(self):
#          print(self.__name)
#          print(self.__display())
    
# obj = A()
# ===============================================
# ===============================================
#Function overwrite : same function use multiple time with many place
#Polymorephism : function overwrite+ function overloadian(differt perameter with different value)
# class A:
#     def display(self):
#         print("Hi")
# class B(A):
#     def display(self):
#         super().display()
#         print("Bye")

# obj = B()
# obj.display()
# ===============================================

# class Area:
#     def find_area(self, a=None, b=None):

#         if a!=None and b!=None:
#             print("The Area is : ",a*b)
#         elif a!=None: 
#             print("The Area is : ",a*a)

#         else:
#             print("Not Found the parameter")
        
# obj = Area()
# obj.find_area()
# obj.find_area(3)
# obj.find_area(2,3)
# ===============================================Access Modifier: _protected: use in inherite class , __private use only inside class===========

#OOP Object and class for Password Authentication:

# class A:
  
#     __Welcome="Welcome Our Hacking Course "

#     def __SetValue(self,name,password):
#        self.name=name
#        self.password=password
#     def __Authentication(self,u_name,password):
#         self.name=u_name
#         self.password=password
#         if u_name == "Shuvo" and password == "123" :
#             print("Welcome Our Admin")
#         else:
#             print("Your User Name and Password is incorrect!")
        
#     def __init__(self):
#         self.name=input("Enter Your Name plz: ")
#         print(self.__Welcome+self.name)
#         name = input ("Enter Your User Name: ")
#         password = input("Enter Your Password: ")
#         print(f"Your Name : {name} , passoword: {password}")
#         self.__Authentication(name,password)

        
        
# obj = A()
# =======================================abstruct Method===========================================================
# *** can't create abstruct class object ... but create obj which inherit abstruct class.

# from abc import ABC, abstractmethod

# class Shape(ABC):
#     def __init__(self, dim1, dim2):
#         self.dim1 = dim1
#         self.dim2 = dim2

#     @abstractmethod
#     def area(self):
#         pass

# class Triangle(Shape):
#     def area(self):
#         area = 0.5 * self.dim1 * self.dim2
#         print("The area is {}".format(area))

# obj = Triangle(20, 2)
# obj.area()

#obj=Shap() #abs() can't use in main class but other class can use which is inherited
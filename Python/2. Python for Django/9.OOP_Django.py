# #Inheritence Practise:
# class A:
#     def __init__(self,name):
#         self.name=name
        
#     def display1(self):
#         print(f'hello {self.name}')
    
#     def hello():
#         print("I am from A class")
        
        
# class B(A):
#     def __init__(self,name,job): # 'name' pass to the class of  A.__init__(self,name)
        
#         # A.__init__(self,name)
#         super().__init__(name)
#         self.job=job
        
    
#     def hello(self):
#         print(f'Hello I\'m form B class {self.name} ! You works as a {self.job}')



# obj= B("shuvo","Mentor")


# obj.hello()
# ==============================================================================================
#Inheritence Practise:
# class A:
#     def __init__(self,name):
#         self.name=name
        
#     def display1(self):
#         print(f'hello {self.name}')
    
#     def hello():
#         print("I am from A class")
        
        
# class B(A):
#     def __init__(self,job): # 'name' pass to the class of  A.__init__(self,name)
        
#         self.job=job
        
    
#     def hello(self):
#         print(f'Hello I\'m form B class  ! You works as a {self.job}')

# class C(B, A): #Method resolution order (MRO): C class , firt work with B class constructor then A Class cz C(B,A) : here B is first place , A is second place.
#     pass         
        


# obj = C( "Mentor")

# obj.hello() 

# print(dir(C))

# ===========================================================Method Resolution Order (MRO)==============================================
# According to the MRO class property :var,method calls 

# class A:
#     def __init__(self,name):
#         self.name=name
        
#     def display1(self):
#         print(f'hello {self.name}')
    
#     def hello():
#         print("I am from A class")
        
        
# class B:
#     def __init__(self,job): # 'name' pass to the class of  A.__init__(self,name)
#         self.job=job
        
    
#     def hello(self):
#         print(f'Hello I\'m form B class  ! You works as a {self.job}')

# class C(A, B): #Method resolution order (MRO): C class , firt work with B class constructor then A Class cz C(A,B) : here B is first place , A is second place.
#     pass         
        


# obj = C('Shuvo')


# # print(dir(C))
# print(C.__mro__)

# ==============================================Constructor in Multiple Inheritance================================================
# super().fn()Name => work with 1 function according to MRO Rulse.

# class A:
#     def __init__(self,name):
#         self.name=name
        
    
#     def hello(self):
#         print("Hello I am from A class")
        
        
# class B:
#     def __init__(self,job): 
#         self.job=job
        
    
#     def hello(self):
#         print(f'Hello I\'m form B class  ! You works as a {self.job}')

# class C(A, B): 
#     def __init__(self,name,job): 
        
#         A.__init__(self,name)
#         B.__init__(self,job)
    
#     def hello(self):
#         A.hello(self)
#         B.hello(self)
#         print(f'Hello I\'m form C class  ! You works as a {self.job}')


# obj=C("Ashraful", "Mentor")

# obj.hello()
# ================================================Meta Class in python=============================================

# Meta class -> Class of a Class

# In python everything is a object of class.


name ="Ashraful"
roll=202
Sun = True 
myList=[1,2,3,4]
myDic={"name":"Shuvo"}

print(type(name))
print(type(roll))
print(type(Sun))
print(type(myList))
print(type(myDic))

class A:
    pass  

obj = A()
print(type(obj))
print(type(A)) # class of type class=> known as meta class ....
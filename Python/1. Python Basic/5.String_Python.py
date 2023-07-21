#String : Ordered , immutable , representation

# string is a sequence of characters with single/double quotes.

# --------------------------------string formatting: """  """, '''  '''--------------------------------------------------------------

# paragraph = '''jasdlkfj jasdf lkadsjf asdf adsf
# jlksadjfa sdjf
# kjasdpfk;alsdkfa sdf;la sdkf sdakfl aksd;fl skadf;lk'''

# print(paragraph)

#---------------------------------------user.upper(),strip(remove space),find(return index value)------------------------------------------------------------------------------------

# name = "   Ashraful momen"

# new=name.replace("momen", "Momen Shuvo")
# print(new)
# print(name.upper())
# print(name.lower())
# print(name.count("a"))
# spaceRemove= name.strip()
# print(spaceRemove,'remove front space')

# word = "what, are, you, doing"
# print(word.startswith("Hello")) #return True/False.
# print(word.endswith("Hello")) #return True/False.
# word = word.split(", ") # split function basically return a list.
# print(word)



# var2 =" ".join(word)
# print(var2)

# -----------------------------timer: check the run time ----------------------------------

# from timeit import default_timer as timer 

# start = timer()
# my_list= ['a']*100
# print(my_list)
# my_join= " ".join(my_list)
# stop = timer()
# print(my_join,stop-start)

# -----------------------------formatter----------------------------------

# var="Momen" 
# value = 27
# pi=3.1416
# sentence = " My name is %s " %var 
# age = "And Age is %d"%value
# fraction="the value of pi is : {:.4f}".format(pi)

# print(sentence)
# print(age)
# print(fraction)

# gravity = 9.81
# sentence = "the gravity is {} and pi {}".format(gravity,pi)
# print(sentence)
# -----------------------------Concat------------------------------------------
firstName = "Asfraful"
lastName = "Momen"
id = 50038

greeting = " \"Welcome \" "+" "+firstName+" "+lastName+ "! And your ID: "+str(id) #or
# greeting = "Welcome "+" "+firstName+" "+lastName+ " ",id
print(greeting)
print(greeting[::-1]) #Reverse of string

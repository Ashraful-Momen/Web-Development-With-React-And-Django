#String : Ordered , immutable , representation

# string is a sequence of characters with single/double quotes.

# --------------------------------string formatting: """  """, '''  '''--------------------------------------------------------------

# paragraph = '''jasdlkfj jasdf lkadsjf asdf adsf
# jlksadjfa sdjf
# kjasdpfk;alsdkfa sdf;la sdkf sdakfl aksd;fl skadf;lk'''

# print(paragraph)

#---------------------------------------user.upper(),strip(remove space)------------------------------------------------------------------------------------

# name = "   Ashraful momen"

# new=name.replace("momen", "Momen Shuvo")
# print(new)
# print(name.upper())
# print(name.lower())
# print(name.count("a"))
# spaceRemove= name.strip()
# print(spaceRemove,'remove front space')

# word = "what, are, you, doing"
# word = word.split(",")
# print(word)

# var2 =" ".join(word)
# print(var2)

# -----------------------------timer: check the run time ----------------------------------
from timeit import default_timer as timer 
start = timer()
my_list= ['a']*100
print(my_list)
my_join= " ".join(my_list)
stop = timer()
print(my_join,stop-start)
# -----------------------------timer----------------------------------
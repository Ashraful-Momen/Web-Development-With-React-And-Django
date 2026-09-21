# =====================================================================
#                     PYTHON STRINGS MASTER CHEAT SHEET
# =====================================================================

# ---------------------------------------------------------------------
# 1. CORE PROPERTIES & REPRESENTATION
# ---------------------------------------------------------------------
# Definition: A sequence of characters wrapped in single ('') or double ("") quotes.
# Key Characteristics: 
#   - Ordered: Characters can be accessed via numerical indices.
#   - Immutable: Once created, individual characters inside cannot be changed directly.

# Multi-line Strings / Paragraphs: Use triple quotes (""" or ''') to span lines.
paragraph = '''This is a multi-line paragraph string.
It preserves all formatting, line breaks,
and indentation exactly as typed.'''


# ---------------------------------------------------------------------
# 2. STRING MANIPULATION & BUILT-IN METHODS
# ---------------------------------------------------------------------
name = "   Ashraful momen"

# Modifying Case (Returns new strings)
print(name.upper())             # "   ASHRAFUL MOMEN" (All uppercase)
print(name.lower())             # "   ashraful momen" (All lowercase)

# Cleaning Spaces & Searching
print(name.strip())             # "Ashraful momen" (Removes leading/trailing spaces)
print(name.count("a"))          # Returns 2 (Counts total instances of 'a')

# Replacing Content
# Syntax: string.replace(old, new)
new_name = name.replace("momen", "Momen Shuvo")
print(new_name)                 # "   Ashraful Momen Shuvo"


# ---------------------------------------------------------------------
# 3. ADVANCED OPERATIONS: SPLIT, JOIN, & BOUNDARY CHECKS
# ---------------------------------------------------------------------
word = "what, are, you, doing"

# Check Boundaries (Returns True / False)
print(word.startswith("Hello")) # False
print(word.endswith("Hello"))   # False

# Split: Converts a String into a List (String to Array)
# Syntax: string.split(separator)
word_list = word.split(", ")    
print(word_list)                # ['what', 'are', 'you', 'doing']

# Join: Combines a List of items into a String (Array to String)
# Syntax: "separator".join(iterable)
word_string = ", ".join(word_list)
print(word_string)              # "what, are, you, doing"


# ---------------------------------------------------------------------
# 4. STRING STRING CONCATENATION & REVERSAL (SLICING)
# ---------------------------------------------------------------------
firstName = "Ashraful"
lastName = "Momen"
id_num = 50038

# Concatenation: Mixing text, escape characters (\"), and variable type casting (str)
greeting = " \"Welcome \" " + " " + firstName + " " + lastName + "! And your ID: " + str(id_num)
print(greeting)                 # Output:  "Welcome "  Ashraful Momen! And your ID: 50038

# String Reversal Trick (Using step slicing [start:stop:step])
print(greeting[::-1])           # Flips the entire string backward cleanly


# ---------------------------------------------------------------------
# 5. STRING FORMATTING TECHNIQUES
# ---------------------------------------------------------------------
var = "Momen" 
value = 27
pi = 3.14159265

# A. Old Style (% Formatter): %s for strings, %d for decimal integers
print("My name is %s" % var)
print("And Age is %d" % value)

# B. New Style (.format()): Brackets act as placeholders
# Float Control: {:.4f} locks decimal places to exactly 4 points
print("the value of pi is : {:.4f}".format(pi))  # 3.1416
print("the gravity is {} and pi {}".format(9.81, pi))


# ---------------------------------------------------------------------
# 6. PERFORMANCE HACK: RUNTIME MONITORING
# ---------------------------------------------------------------------
# Always use "".join() over standard string loops (+) for massive operations.
from timeit import default_timer as timer 

start = timer()
my_list = ['a'] * 100           # Multiplies list elements to 100 items
my_join = " ".join(my_list)     # Efficiently binds them with a space separator
stop = timer()

print(f"Runtime duration: {stop - start} seconds")
# =====================================================================





--------------------------------- MY Note : String -----------------------------------

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

word = "what, are, you, doing"
print(word.startswith("Hello")) #return True/False.
print(word.endswith("Hello")) #return True/False.
word = word.split(", ") # split function basically return a list. string to array . 
print(word) # ['what', 'are', 'you', 'doing']
# array to string 
word_string = ", ".join(word_list)
print(word_string)  # "what, are, you, doing"




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


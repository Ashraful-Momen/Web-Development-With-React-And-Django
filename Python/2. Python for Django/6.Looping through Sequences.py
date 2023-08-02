# looping
# for i in tuple, range, dictionary, list
myTuple = ("a", "b", "c", "d")
myList = [("a", 1, "BDT"), ("b", 2, "USD"), ("c", 3, "CAD")]
myDict = {"name" : "Simanta", "age" : 26, "country" : "Bangladesh"}
myStr = "Bohubrihi"
mySet = {"BDT", "USD", "CAD"}
#for x, y, z in myList:
#    print(f"{x}, {y}, {z}")

#for key, value in myDict.items():
    #print(f"{key} => {value}")

#for ch in myStr:
#    print(ch)

for currency in mySet:
    print(currency)
    
# ======================================================================
myList = list(range(1, 10))
# print(myList)

#for i in range(0, 51, 5):
#    print(i)

myList = ['Spanish', 'English',  'French', 'German', 'Irish', 'Chinese']

for i in range(len(myList)):
    print(f"Language: {myList[i]}")
# ======================================================================

myList = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
myList2 = [1, 2, 3, 4, 5, 6]

# enumerate: return value with index number as like key in JS.

#for i, fruit in enumerate(myList):
#    print(f"{i} index of {fruit}")

# zip
#for i, j in zip(myList2, myList): #**** important code ...
#    print(i, j)

#for i in reversed(sorted(myList)): 
    # print(i)
# ======================================================================
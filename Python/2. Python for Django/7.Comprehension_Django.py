# Comprehension
myList = [1,5,6,7,2,3]
newList = []
# List of the squares of the odd numbers
for i in myList:
    if i%2 == 1:
        newList.append(i*i)

comList = [i**3 for i in myList if i%2==1]


# print("Old List: ", myList)
# print("New List: ", newList)
# print("Com List: ", comList)
# =============================list to list, tuple, set , dic============================

myList = [1,2,3,4,5,6,7,8,9,10]

newList = [i*i for i in myList if i%2 == 0]
newDic = {i:i*i for i in myList }
newSet = {i**3 for i in myList }
newTuple = tuple({i**3 for i in myList })
newTupleList = [(i,i**3,i**4) for i in myList ]

# print(newList)
# print(newDic)
# print(newSet)
# print(newTuple)
# print(newTupleList)
# ========================dic to list convert=================================

myDic = {'name':'shuvo', 
         'id': 201,
         'phone':1674317715}

newList = [key for key,value in myDic.items()]
newList = [value for key,value in myDic.items()]
newList = [ (key, value) for key,value in myDic.items()]
newDic = {key +" key": value for key,value in myDic.items()} 


# print(newList)
# print(newDic)
# ===============================String==========================================
var = "Hello bangladesh"

newStr= [i.upper() for i in var]

print(newStr)
# ==================================matrix==========================================

'''
matrix: 0,1,2,3 
        0,1,2,3
        0,1,2,3
 
'''

matrix = []

for i in range(3): #row 
    matrix.append([])
    for j in range(4): #colomun
        matrix[i].append(j)
        
newMatrix = [[j for j in range(4)] for i in range(3)] #matrix comprehension.
    
print(matrix)
print(newMatrix)

#take every row's first element from the matrix: 

flatMatrix= [i[0] for i in newMatrix]

print(flatMatrix)

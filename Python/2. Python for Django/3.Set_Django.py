'''
A set is a collection which is unordered, unchangeable*/immutable, and unindexed.

No duplicate element is allow in Set's.
to convert => set ([list]) => {'elements',}

* Note: Set items are unchangeable, but you can remove items and add new items.
'''
# -------------------------------------set([list])--------------------------------------------------

# fruit = {'mango', 'banana', 'watermelon'}
# print(type(fruit))

# busket = ('a','b','c')
# a = set(busket)
# print(type(a))

# List = [1,2,3]
# a = set ( List)
# print(type(a))
# -------------------------------------set([list])--------------------------------------------------

# can't access element by index [] in set that's why use loop for access the value.

# fruit = {'mango', 'banana', 'watermelon'}
# print("mango" in fruit)

# for x in fruit:
#     print(x)

# # add => 

# fruit.add("lici")
# print(fruit)

# fruit.remove("lici")
# print(fruit)

# #getting error if remove(element) not found in set , that's why use set.discard() for avoiding the error.

# # fruit.discard('mango')
# fruit.discard('banana')

# print(fruit)

# -------------------------------------set([list])--------------------------------------------------

# my_dic={1,2,3}
# my_dic1={"a","b","c"}
# c = set(["hello"])
# print(my_dic1)
# print(my_dic)
# print(c)
# print(type(c))

# myset=set()  #declear a empty set ...
# myset.add(1)
# myset.add(2)
# myset.add(3)

#myset.remove(4)     # if the element is not in list , then get the key error for removing

#avoiding the key error then use discard()

# myset.discard(4)

# print(myset.pop()) # Here pop the 1 from set .

# print(myset)
# ===================================================
# my_set2 = {1,2,3,4}

# for i in my_set2:
#     print(i)

# if 3 in my_set2:
#     print("Yes")
# ====================================================

# odd={1,3,5,7}
# even={2,4,6,8}
# another={1,2,3,4,5,6,7,8}


# a = odd.union(even)  # (odd) u (even) -> common + uncommon -> no duplicate element.

# b = odd.intersection(another)  # (odd) n (even) -> just common element .

# print(a)
# print(b)
# ===================difference: A-B=================================

# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3,10,11,12}

# diff = A.difference(B)

# diff2 = B.difference(A)
# print(diff)
# print(diff2)
# ===================symmetric_difference: (A-B) u (B-A) / (A u B) - (B n A): take uncommon element from A and B set.=================================

# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3,10,11,12}

# diff = A.difference(B)

# diff2 = B.difference(A)
# s_diff = A.symmetric_difference(B) # Those elements not in Both sets(A,B)
# print(diff)
# print(diff2)
# print(s_diff)

# A.update(B) #Combined Bothe set of A and B
# print(A)
#===============intersection(common element only): A n B=======================
# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3,10,11,12}

# A.intersection_update(B)
# print(A)

#======================================
# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3}

# print(A.issubset(B)) # Return True or False
# print(B.issubset(A)) # True
#=================================

#======================================
# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3}

# print(A.issuperset(B)) # Return True
# print(B.issuperset(A)) # Fasle
#=================================

#======================================
# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3}
# C={11,12,13}

# print(A.isdisjoint(B)) # for Disjoint need unique element both of set
# print(A.isdisjoint(C))

#=================================
# A={1,2,3,4,5,6,7,8,9}
# B={1,2,3}
# C={11,12,13}

# B=A
# C=B.copy() #Original Copy
# print(B)
# print(C)

# D=frozenset([1,2,3,4,5])

#D.add(9) #AttributeError: 'frozenset' object has no attribute 'add'
#Object Function can't work in frozenset

# print(D)

# ====================================================================================
# Frozensets
# initialize A and B
# A = frozenset([1, 2, 3, 4])
# B = frozenset([3, 4, 5, 6])

# # copying a frozenset
# C = A.copy()  # Output: frozenset({1, 2, 3, 4})
# print(C)

# # union
# print(A.union(B))  # Output: frozenset({1, 2, 3, 4, 5, 6})

# # intersection
# print(A.intersection(B))  # Output: frozenset({3, 4})

# # difference
# print(A.difference(B))  # Output: frozenset({1, 2})

# # symmetric_difference
# print(A.symmetric_difference(B))  # Output: frozenset({1, 2, 5, 6})
# ====================================================================================
# random dictionary 
'''
When you use a dictionary as an iterable for a frozen set, it only takes keys of the dictionary to create the set.
'''
person = {"name": "John", "age": 23, "sex": "male"}

fSet = frozenset(person)
print('The frozen set is:', fSet)
# ====================================================================================
# ====================================================================================
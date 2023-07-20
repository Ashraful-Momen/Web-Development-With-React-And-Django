# --------------------------------------------for Loop: List , tuple, string---------------------------------------------------------------
# for <var> in <iterable>:
#     <body>

# iterable is a collection of object.

# -----------------------------------------------------------------------------------------------------------
# fruit = ['mango','banana','jackfruit']

# for x in fruit:
#     print(x)
# -----------------------------------break and continue------------------------------------------------------------------------


# for x in range(1,30):
#     if x>10 and x<20:
#         continue #skip 11-19
        
#     elif  x%2==0:
#         print("Even Number ",x)
    
#     elif x==25:
#         break # loop break here .
#     print(x)
    
    
    
# print("Loop break")
# ---------------------------------how many product can able to purchase according to total budget--------------------------------------------------------------------------

# total_price = [10,20,30,500,600]
# total_budget = 1000
# total_item = 0

# for current_price in total_price:
    
#     total_budget = total_budget - current_price
#     if total_budget <0: break
#     total_item+=1
    
# print(total_item)

# ----------------------------------------While loop -------------------------------------------------------------------
# i = 1
# while i<100:
#     if (i%2==0):
#         print(i)
#     i+=1
# print("Loop break")
# -------------------------------------------whileLoop : break and continue----------------------------------------------------------------
i = 0 

# while i<100:
    
#     if i>18 and i<20:
#         i+=1
#         continue 
#     elif i==60:break
#     print(i)  
#     i+=1
    
    
# print("Loop break")




# --------------------------------------List comprehension---------------------------------------------------------------------
# my_list = []

# for x in range(1,101):
#     my_list.append(x)
# print(my_list)

# print("---------------list comprehension-----------------------")
# # [things for things in List_of_things]

# another_list=[i for i in range(1,101)]
# print(another_list)

# ---------------------------------------even number list----------------------------------------------------

# even_list = [x for x in range(1,101) if x%2==0]
# print(even_list)

# ---------------------------------------odd number list----------------------------------------------------
# my_list=list(range(1,101))

# odd_list = [x for x in my_list if x%2!=0]
# print(odd_list)
# ------------------------------------------Inner and Outer Loop-----------------------------------------------------------------

'''Outer_loop_Expression:
    outer_loop_statement
    inner_loop_expression:
        inner_loop_statement
    outer_loop_statement
'''
# ------------------------------------------Multiplication Table-----------------------------------------------------------------
for i in range(1,11):
    for j in range(1,11):
        print(f'{i} X {j} = {i*j}')
    print("------------------------------------")
# -----------------------------------------------------------------------------------------------------------
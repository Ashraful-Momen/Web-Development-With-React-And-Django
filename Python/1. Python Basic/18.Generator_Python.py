#return just back 1 value at a time but yield return multiple value in function:

# def fn():
#     yield 1
#     yield 2
#     yield 3

# values = fn()
# print(values.__next__())
# print(values.__next__())
# print(values.__next__())
# print(values.__next__())
# ===============================return squar (1,10)===================================

def squarFn():
    n=1
    while n<=10:
  
        sq = n*n  
        yield sq 
        n=n+1

values= squarFn()

for i in values:
    print(i)
    
# for the generator has generator comprehension ()




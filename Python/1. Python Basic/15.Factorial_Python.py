def factorial(n):
    if n==1:
        return 1
    m = factorial(n-1)
    
    # print(n,m)
    
    return m*n

print(factorial(3))
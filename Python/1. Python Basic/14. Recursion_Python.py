def my_fun(n):
    if n>10: #base Case for stop the loop.
        return
    
    # print(n)
    
    my_fun(n+1) # use stack memory : 10, 9, 8,....
    
    print(n)

my_fun(1)
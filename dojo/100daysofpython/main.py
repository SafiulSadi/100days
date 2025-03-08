import bs4
n = int(input())

while n >0:
    num = input()
    arr = input()
    srr = [ int(i) for i in arr]
    x = 0
    curr = 0
        
    for i in srr:
        int(i)
        if i == 1 and i != curr:
            x += 1
            curr = 1
        if i == 0 and i != curr:
            x+= 1
            curr = 0
    print(x)
    
    
    n -= 1
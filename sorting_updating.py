# def jimOrders(orders):
#     s = sorted(enumerate(orders,1),key=lambda x:sum(x[1]))
#     return (i[0] for i in s)
# n = int(input())
# orders = [tuple(map(int,input().split())) for i in range(n)]
# print(*jimOrders(orders))


# import sys
# from bisect import insort
# from collections import defaultdict

# def jimOrders(orders):
#     sequence = []
    
#     for i, el in enumerate(orders, 1):
#         time = sum(el)
#         insort(sequence, (time, i))
    
    
#     return list(map(lambda x: x[1], sequence))

# if __name__ == "__main__":
#     n = int(input().strip())
#     orders = []
#     for orders_i in range(n):
#         orders_t = [int(orders_temp) for orders_temp in input().strip().split(' ')]
#         orders.append(orders_t)
#     result = jimOrders(orders)
#     print (" ".join(map(str, result)))

# n=int(input("enter num:-"))
# a=[[1,2,3,4,5],[2,3,4,5,6]]
# i=0
# sum=0
# while i<len(a):
#     j=0
#     while j<len(a[i]):
#         c=a[i][j]+sum
#         j=j+1
#     i=i+1
#     print(c)


a=[[2,3],[1,3],[3,3],[6,3]]
i=0
av=0
b=[]
while i<len(a):
    j=0
    sum=0
    while j<len(a[i]):
        sum=sum+(a[i][j])
        j=j+1    
    i=i+1
    b.append(sum)
print(b)
c=sorted(b)
print(c)
v=0
while v<len(c):
    print(v+1)
    v=v+1




  
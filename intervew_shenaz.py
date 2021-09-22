
num=int(input("enter the num="))
sum=0
rev=0
while num>0:
    rev=rev*10+(num%10)
    num=num//10 
a=rev
while a>0:
    r=a%10
    b=r*r
    c=b
    a=a//10
    print(c,end="")
print()






obj=int(input("enter the num="))
dic={}
index=0
while index<obj:
    name=input("enter ur name=")
    age=int(input("enter ur age="))
    empty_dic[name]=age
    index=index+1
print(empty_dic)

list=[1,3,2,1,2,3,1,0,1,3]
d=[]
for l in list:
    pass
    if l==0:
        count=l
    elif l%2==0:
        continue
    d.append(l)
print(d)
print(count)

    

# def add(**name):
#     print(name)
# add(a=5,b=19,c=23)


# def num():
#     def num1():
#         return "hello manvi"
#     return num1()
# print(num())

# str=[1,2,3,4,5,6]
# str.reverse()
# print(str)
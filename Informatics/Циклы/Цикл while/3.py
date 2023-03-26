x = int(input())
num = 0

while 2 ** num <= x:
    print(2 ** num, end=' ')
    num += 1
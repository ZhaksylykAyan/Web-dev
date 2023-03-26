x = int(input())
num = 0

while 2 ** num <= x:
    if 2 ** num == x:
        print('YES')
        exit()
    num += 1
print('NO')
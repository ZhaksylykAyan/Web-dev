n = input()
num = 0

for i in range(len(n)):
    x = int(n[i])
    powerOfTwo = 2 ** (len(n) -1 - i)
    num += x * powerOfTwo

print(num)
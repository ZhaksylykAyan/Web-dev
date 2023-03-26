import math

x = int(input())
n = 1

while n <= x:
    s = int(math.sqrt(n))
    if s * s == n:
        print(n)
    n += 1
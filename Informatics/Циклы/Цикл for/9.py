import math

x = int(input())
cnt = 0

for i in range(1, int(math.sqrt(x) + 1)):
    if x % i == 0:
        cnt += 2
    if i == math.sqrt(x):
        cnt -= 1

print(cnt)
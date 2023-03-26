x = int(input())
ans = 0

while x > 0:
    num = x % 10
    x //= 10
    ans *= 10
    ans += num
print(ans)
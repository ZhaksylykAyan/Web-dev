def Xor(a, b):
    return not a and b or not b and a

a, b = list(map(int, input().split()))
print(int(Xor(a, b)))
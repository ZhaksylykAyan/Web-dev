# Enter your code here. Read input from STDIN. Print output to STDOUT
def divmod(a, b):
    div = a // b
    mod = a % b
    ans = []
    ans.append(div)
    ans.append(mod)
    res = tuple(ans)
    print(div)
    print(mod)
    return res

a = int(input())
b = int(input())
print(divmod(a, b))
n = int (input())
lst = []
counter = {}
for i in range(n):
    str = input()
    if str in counter:
        counter[str] += 1
    else:
        counter[str] = 1
        lst.append(str)
print(len(lst))

for i in lst:
    print(counter[i], end = ' ')
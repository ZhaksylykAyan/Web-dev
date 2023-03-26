n = int(input())
arr = list(map(int, input().split()))
cnt = 0

for i in range(len(arr)):
    if i + 1 == len(arr):
        continue
    if (arr[i + 1] > 0 and arr[i] > 0) or (arr[i + 1] < 0 and arr[i] < 0):
        print('YES')
        exit()
print('NO')
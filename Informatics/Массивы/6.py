n = int(input())
arr = list(map(int, input().split()))
cnt = 0

for i in range(len(arr)):
    if i + 1 == len(arr) or i == 0:
        continue
    if arr[i] > arr[i + 1] and arr[i] > arr[i - 1]:
        cnt += 1
print(cnt)
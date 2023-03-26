# Enter your code here. Read input from STDIN. Print output to STDOUTimport math

import math
AB = int(input())
BC = int(input())

AC = math.sqrt(AB**2 + BC**2)

MC = AC / 2

MB = MC
BC = BC
MC = MC

cos_MBC = (MB**2 + BC**2 - MC**2) / (2 * MB * BC)
MBC = math.acos(cos_MBC)

print(str(round(math.degrees(MBC))) + "\xb0")

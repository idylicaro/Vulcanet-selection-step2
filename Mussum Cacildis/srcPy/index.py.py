context = [5,3,1,2,4]
vector = []
k = int(input())
for x in range(0,k):
  for j in range(0,k):
    for g in range(0,k):
      if x!= j and x!=g and j!= g: 
        vector.append([x,j,g])

for i in vector:
  if (i[0]< i[1] < i[2]) and (context[i[0]] < context[i[1]] and context[i[1]] > context[i[2]] ):
      print('YES')
      print(i[0]+1,i[1]+1,i[2]+1)

print(len(vector))
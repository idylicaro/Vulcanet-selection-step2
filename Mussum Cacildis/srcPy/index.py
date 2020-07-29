def getCans():
  cans = []
  aux = input().split(' ')
  for x in aux:
    cans.append(int(x))
  return cans

nCases = int(input())
while(nCases):

  k = int(input())
  cans = getCans()
  vector = []
  for x in range(0,k):
    for j in range(0,k):
      for g in range(0,k):
        if x!= j and x!=g and j!= g: 
          vector.append([x,j,g])

  flag = False
  for i in vector:
    if (i[0]< i[1] < i[2]) and (cans[i[0]] < cans[i[1]] and cans[i[1]] > cans[i[2]] ):
        print('YES')
        print(i[0]+1,i[1]+1,i[2]+1)
        flag = True
        break
  if not flag:
    print('NO')

  nCases -= 1


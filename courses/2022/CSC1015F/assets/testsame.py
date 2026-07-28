test = open("out1.txt", "r")
answer = open("sampleoutput.txt", "r")

allT = test.readlines()
allA = answer.readlines()

for i in range(len(allT)):
    if allT[i] != allA[i]:
        print(allT[1], allA[1])
print("Check Complete")
test.close()
answer.close()

def wordVal(n):
    possible = ["one", "two", "three"]
    for num, word in enumerate(possible):
        if len(word) == len(n):
            for i in range(len(word)):
                if word[:i] + word[i+1:] == n[:i] + n[i+1:]:
                    return (num+1)


t = int(input())
for i in range(t):
    word = input()
    print(wordVal(word))

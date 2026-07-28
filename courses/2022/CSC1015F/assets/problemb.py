allowed = {"HELLO": "ENGLISH", "MOLO": "ISIXHOSA", "HALLO": "AFRIKAANS",
           "SAWUBONA": "ISIZULU", "BONJOUR": "FRENCH", "MARHABA": "ARABIC"}
word = input()
while word != "#":
    if word not in allowed:
        print("UNKNOWN")
    else:
        print(allowed[word])
    word = input()

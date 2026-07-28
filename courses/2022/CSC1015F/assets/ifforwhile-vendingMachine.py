# A program that returns the coins returned to someone after they have given 
# cash (some amount over their total)
# Alexander Cristaudo
# CRSALE010
# 14 March 2022

cost = eval(input("Enter the cost (in cents):\n"))

total = 0
while total < cost:
    total+=eval(input("Deposit a coin or note (in cents):\n"))
over = total - cost

# Dictionary storing cent values, with their corresponding amount issued as change

counter = {500: 0, 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0}

if over != 0:
    while over > 0:
        # This i value is the first part in dictionary (i.e. 500, 200, 100, 50...)
        for i in counter:
            # Finds the largest coin to give
            if over >= i:
                # counter[i] accesses the value associates with the amount issued as change
                # so counter[0] = 0 if 500: 0 is the stored pair
                counter[i]+=1
                over-=i
                break
    print("Your change is:")
    for i in counter:
        if i >= 100 and counter[i] > 0:
            # Converts any cents into rand (if applicable, so 200c = R2)
            print(counter[i], " x R", i//100, sep = "")
        elif i < 100 and counter[i] > 0:
            print(counter[i], " x ", i, "c", sep = "")
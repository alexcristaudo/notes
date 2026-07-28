import random
# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
obs = [29.9, 11.4, 26.6, 23.7, 25.3, 28.5, 14.2, 17.9, 16.5, 21.1, 24.3]
current_done = set()
total = sum(obs)
count = 0
check = 1.69
prop = 0

while count < 462:
    A = []
    total_sum = 0
    done = [0 for i in range(11)]
    for i in range(5):
        r = random.randint(0, 10)
        while obs[r] in A:
            r = random.randint(0, 10)
        A.append(obs[r])
        total_sum += obs[r]
        done[r] = 1
    if tuple(done) not in current_done:
        count += 1
        current_done.add(tuple(done))
        A_mean = total_sum/5
        B_mean = (total-total_sum)/6
        if B_mean - A_mean >= check:
            prop += 1
print(prop)

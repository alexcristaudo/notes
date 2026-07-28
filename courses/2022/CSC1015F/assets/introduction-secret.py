# Program to guess a secret number
# Name: Alexander Cristaudo
# Student Number: CRSALE010
# Date: 20 February 2022

secret_number = 42 # create secret number in program
guess = 0 # variable to store user's guess

# as long as we have not found the secret number
while guess != secret_number:
    # get a new guess from user
    guess = eval(input("? "))
    # check if guess is too low
    if guess < secret_number:
        print ("lo")
    # or too high
    elif guess > secret_number:
        print ("hi")

print ("Correct!") # print message indicating success
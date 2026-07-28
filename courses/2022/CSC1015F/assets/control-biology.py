print("Welcome to the Biology Expert")
print("-----------------------------")
print("Answer the following questions by selecting from among the options.")
skel = input("The skeleton is (internal/external)?\n")
if skel == "internal":
    fert = input("The fertilisation of eggs occurs (within the body/outside the body)?\n")
    if fert == "within the body":
        prod_by = input("Young are produced by (waterproof eggs/live birth)?\n")
        if prod_by == "waterproof eggs":
            skin = input("The skin is covered by (scales/feathers)?\n")
            if skin == "scales":
                print("Type of animal: Reptile")
            else:
                print("Type of animal: Bird")
        else:
            print("Type of animal: Mammal")
    else:
        lives = input("It lives (in water/near water)?\n")
        if lives == "in water":
            print("Type of animal: Fish")
        else:
            print("Type of animal: Amphibian")
else:
    print("Type of animal: Arthropod")
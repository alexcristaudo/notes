lat_deg = eval(input("Enter first number:\n"))
lat_min = eval(input("Enter second number:\n"))
lat_sec = eval(input("Enter third number:\n"))
long_deg = eval(input("Enter fourth number:\n"))
long_min = eval(input("Enter fifth number:\n"))
long_sec = eval(input("Enter sixth number:\n"))

if lat_deg > 90 or lat_deg < -90 or long_deg > 180 or long_deg < -180:
    print("Hmmm ... looks like 6 random numbers.")
elif lat_min < 0 or lat_min > 59 or long_min < 0 or long_min > 59:
    print("Hmmm ... looks like 6 random numbers.")
elif lat_sec < 0 or lat_sec > 59 or long_sec < 0 or long_sec > 59:
    print("Hmmm ... looks like 6 random numbers.")
else:
    print("WOW! Looks like geographic coordinates!")
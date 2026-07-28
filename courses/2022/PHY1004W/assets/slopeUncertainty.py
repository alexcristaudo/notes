from math import sqrt

x = [
    0.633,
    0.6,
    0.567,
    0.533,
    0.5,
    0.467,
    0.433,
    0.4,
    0.367,
    0.333,
    0.3,
    0.267,
    0.233,
    0.2,
    0.167,
    0.133,
    0.1,
    0.0667,
    0.0333]
x.sort()
y = [-0.932,
     -1.287,
     -1.716,
     -2.027,
     -2.353,
     -2.737,
     -3.063,
     -3.388,
     -3.744,
     -4.099,
     -4.409,
     -4.690,
     -4.986,
     -5.238,
     -5.549,
     -5.904,
     -6.170,
     -6.466,
     -6.703]
eqn = ""


def uncertainty(x, y, eqn):
    Di2 = 0.0
    Xi2 = 0.0
    Xi = 0.0
    for i in range(len(x)):
        eqnVal = eval(eqn.replace("x", "*(" + str(x[i]) + ")"))
        print(eqnVal)
        Di2 += (y[i]-eqnVal)**2
        Xi2 += x[i]**2
        Xi += x[i]
    numerator = Di2 * len(x)
    denom = (len(x) * (Xi2) - (Xi)**2) * (len(x)-2)
    return sqrt(numerator/denom)


print(uncertainty(x, y, "-10.391x-0.8209"))

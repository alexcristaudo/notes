from math import sqrt
import numpy as np


def mean(data):
    # return sum(data)/len(data)
    return 10.391


def experimental_sd(data):
    m = mean(data)
    exp_sd = 0
    for i in data:
        exp_sd += (i-m)**2
    exp_sd /= (len(data)*(len(data)-1))
    exp_sd = sqrt(exp_sd)
    return exp_sd


def experimental_sd_numpy(raw_data):
    data = np.array(raw_data)
    std = np.std(data, ddof=1)
    return (std/np.sqrt(len(data)))


time = [0.667,
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


# sqrt [ Σ(yi – ŷi)2 / (n – 2) ] / sqrt [ Σ(xi – x)2 ]


data = [-1.138,
        -1.474,
        -1.846,
        -2.218,
        -2.572,
        -2.961,
        -3.275,
        -3.592,
        -3.976,
        -4.305,
        -4.634,
        -4.969,
        -5.277,
        -5.609,
        -5.971,
        -6.352,
        -6.729,
        -7.076,
        -7.438,
        -7.743]
print(len(data))

print(experimental_sd_numpy(data))
print(experimental_sd(data))


def uncertaintyGradient(x, y, eqn):
    sumX_i2 = 0
    sumX_i = 0
    sumD_i2 = 0
    for i in range(len(x)):
        sumX_i2 += x[i]**2
        sumX_i += x[i]

        replacer = "*(" + str(x[i]) + ")"
        eqnValue = eval(eqn.replace("x", replacer))
        sumD_i2 += y[i] - eqnValue
    uncertainty = sqrt(sumD_i2/(20*sumX_i2-(sumX_i)**2)*(len(x)/(len(x)-2)))
    return uncertainty


print(uncertaintyGradient(time, data, "-10.391x-0.8209"))

import numpy as np
import matplotlib.pyplot as plt
from scipy import signal
from math import log10

def showHist(start, end, width, xlbl, ylbl, data, isRel):
    bins = np.arange(start, end, width)
    plt.xlabel(xlbl)
    plt.ylabel(ylbl)
    if isRel:
        # ? This multiplies each bin by 1/N
        weight_array = (1/len(raw_data))*np.ones_like(raw_data)
        plt.hist(data, bins, weights=weight_array)
    else:
        plt.hist(data, bins)
    plt.show() 

def gaussian(x, mu, sig):
    # See equation on Appendix G
    for i in x:
        print(1/(sig*np.sqrt(2*np.pi))*np.exp(-np.power(i - mu, 2.) / (2*np.power(sig, 2.))))
    return 1/(sig*np.sqrt(2*np.pi))*np.exp(-np.power(x - mu, 2.) / (2*np.power(sig, 2.)))

def showGaussian(data, start, end, width, xlbl, ylbl):
    mean = np.mean(data)
    std_dev = np.std(data, ddof = 1)
    points = np.arange(start, end, 1)
    # Make the plot of the gaussian... Note that the gaussian is multiplied by 'width'.
    # since the gaussian is a pdf (integral=1) but the rel. frequency plot is prob. 'per bin'
    plt.plot(points, width*gaussian(points, mean, std_dev), linewidth=2, color='r')
    plt.xlabel(xlbl)
    plt.ylabel(ylbl)
    plt.show()

def calcReadings(raw_data, mult, start, end, width): # Mult is the factor to convert decimals into ints
    data = []
    for i in raw_data:
        data.append(i*mult)
    readings = {}

    cnt = 0
    for i in range(start, end, width):
        for j in data:
            if i <= j <= i+width-1:
                cnt+=1
        readings[str("{:.(math.log10(mult))f}".format(i/mult)) + " - " + str((i+width-1)/mult)] = cnt
        cnt = 0
    print(readings, end = " ")
    print("with a total of", sum(readings.values()), "readings")
    print()
    print("RELATIVE FREQUENCY")
    s = 0
    for i in readings.values():
        print(i/50)
        s+=i/50
    print("SUM:", s)
        
        
        
raw_data =  [0.671, 0.442, 0.525, 0.421, 0.561, 0.464, 0.592, 0.484, 0.513, 0.687,
            0.554, 0.216, 0.541, 0.453, 0.634, 0.637, 0.343, 0.605, 0.378, 0.426,
            0.701, 0.440, 0.460, 0.391, 0.477, 0.269, 0.351, 0.337, 0.482, 0.632,
            0.665, 0.501, 0.346, 0.484, 0.377, 0.549, 0.504, 0.425, 0.289, 0.636,
            0.578, 0.521, 0.596, 0.575, 0.533, 0.535, 0.816, 0.563, 0.476, 0.405]

"""
data = np.array([650.4, 654.4, 656.3, 653.6, 642.3, 666.3, 665.8, 654.5, 662.3, 660.7,
        660.6, 641.2, 652.0, 664.2, 648.1, 654.7, 669.1, 657.6, 676.9, 634.5,
        659.1, 648.2, 649.7, 643.6, 643.6, 648.5, 658.3, 653.5, 649.4, 662.5,
        669.6, 656.8, 642.8, 657.9, 664.1, 639.8, 646.0, 647.9, 624.3, 656.4,
        655.6, 662.1, 651.5, 651.0, 652.0, 646.0, 638.8, 656.0, 671.4, 651.1])

showGaussian(data, 600, 700, 10, "d (mm)", "relative frequency")
"""


rdata = [ 671,  442,  525,  421,  561,  464,  592,  484,  513,  687,
             554,  216,  541,  453,  634,  637,  343,  605,  378,  426,
             701,  440,  460,  391,  477,  269,  351,  337,  482,  632,
             665,  501,  346,  484,  377,  549,  504,  425,  289,  636,
             578,  521,  596,  575,  533,  535,  816,  563,  476,  405]

data = np.array(rdata)
showGaussian(data,100, 900, 10, "H", "J")

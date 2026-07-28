# This example code does a Linear Least Squares Fit for a data set.
# To use, enter your data in the 'xdata' and 'ydata' lists then run.
# The output is the slope (m) and the intercept (c) of the fit line
#   with uncertainties on the fitted quantities
import matplotlib.pyplot as plt
import numpy as np
import math
# enter your data here
# be sure xdata and ydata have the same number of entries
xdata = [
    0.03333,
    0.06667,
    0.1000,
    0.1333,
    0.1667,
    0.2000,
    0.2333,
    0.2667,
    0.3000,
    0.3333,
    0.3667,
    0.4000,
    0.4333,
    0.4667,
    0.5000,
    0.5333,
    0.5667,
    0.6000,
    # 0.6333,
    # 0.6667


]

ydata = [
    -1.529,
    -1.877,
    -2.164,
    -2.543,
    -2.906,
    -3.269,
    -3.663,
    -4.056,
    -4.298,
    -4.609,
    -4.904,
    -5.206,
    -5.509,
    -5.766,
    -6.084,
    -6.334,
    -6.705,
    -7.045


]

# [2.1, 3.3, 3.8, 4.5]
# this gets the number of data points
N = len(xdata)
# this initializes the sums needed for the least squares fit
sum_xy = 0.0
sum_x = 0.0
sum_y = 0.0
sum_xx = 0.0
sum_dd = 0.0
# this calculates the sums needed for the least squares fit
for j in range(N):
    sum_xy += xdata[j]*ydata[j]
    sum_x += xdata[j]
    sum_y += ydata[j]
    sum_xx += xdata[j]*xdata[j]
# this does the linear least squares fit
# (compare these to equations in the measurement manual)
mfit = (N*sum_xy - sum_x * sum_y) / (N*sum_xx - sum_x * sum_x)
cfit = (sum_xx*sum_y - sum_xy*sum_x) / (N*sum_xx - sum_x * sum_x)
for j in range(N):
    d = ydata[j] - (mfit * xdata[j] + cfit)
    sum_dd += d*d
umfit = math.sqrt((sum_dd)/(N*sum_xx - sum_x * sum_x)*N/(N-2))
ucfit = math.sqrt((sum_dd * sum_xx)/(N*(N*sum_xx - sum_x * sum_x))*N/(N-2))
# this prints the results
print(umfit)

print("m = %6.2f +/- %5.2f" % (mfit, umfit))
print("c = %6.2f +/- %5.2f" % (cfit, ucfit))
# plot the model prediction with the best-fit parameters
# (you will need matplotlib and numpy installed to do this)
xdata_array = np.array(xdata)
ydata_array = np.array(ydata)
plt.plot(xdata_array, ydata_array, 'bs', label="Data")
yfit = mfit*xdata_array + cfit
plt.plot(xdata_array, yfit, '-r', label="Unweighted Best Fit")
plt.title("The result of the model fit to the linear data")
plt.ylabel("y")
plt.xlabel("x")
plt.legend()
plt.show()

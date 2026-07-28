---
title: Lab Test 2
type: test
status: needs-review
source: onedrive
assets: [Lab-Test-2.docx]
---
> [!warning]
> Converted from .docx with 4 warning(s) — check tables and equations. Original attached.

Calculating the Inductance of an Inductor (H)

Alexander Cristaudo

CRSALE010

Date Performed: 18 October 2022

Peoplesoft ID: 1873229

Lab Test 2

# **Introduction and Aim**

In an RL circuit, which is a circuit consisting of both a resistor and an inductor, the impedance of the circuit is equivalent to the total resistance of the circuit from both the inductor and resistor. Now the current in the circuit is related to both the resistance and impedance in the following way: where is the potential difference across the resistor and is the input potential difference supplied to the whole circuit (by a frequency generator in this case). From this equation, we get that (Equation (1)). Now and are fixed, so this gives a linear relationship between and . There is also a relationship between the impedance, resistance, frequency (of the alternating current) and the inductance of an inductor. This relationship is described by the equation (Equation (2)) where is the inductance and is the frequency supplied by the frequency generator. The aim of this experiment is to calculate the inductance of an inductor in an RL circuit and check the validity of this result.

# **Method and Apparatus**

## **Apparatus**

*   An oscilloscope, to measure the frequency and and
*   A multimeter, to measure the resistance of a resistor
*   An inductor
*   A resistor
*   A frequency generator
*   Cables to connect the frequency generator to the inductor, inductor to the resistor , resistor to the frequency generator and to use the multimeter to calculate the resistance
*   2 Channel cables to get and

A diagram showing the apparatus required

_Diagram 1_

_Frequency Generator_

_Resistor_

_Inductor_

## *(image omitted — open the attached original)*

## **Method**

The multimeter was first used to get the resistance of resistor number **49**. This was obtained by connecting 2 leads to the multimeter, one into the COM port and the other into V. The mode of the multimeter was changed to (to turn the multimeter into an ohmmeter to measure the resistance), then the other sides of the leads were connected to the resistor, so as to connect the resistor in series with the multimeter. The resistance is displayed on the multimeter screen and the range button was pressed until the resistance was displayed to the most digits. After the resistance was measured, the circuit in _Diagram 1_ was constructed. Firstly one lead connected the frequency generator to the inductor, then another lead connected the inductor to the resistor, finally a lead connected the resistor to the other end of the frequency generator. Some frequency was selected on the frequency generated and not changed afterwards (by adjusting the frequency dial). The channel cables were then used such that Channel 1 calculated and Channel 2 calculated . This was done by connecting the Channel 1 cables across the frequency generator and Channel 2 cables across the resistor. To get the potential difference displayed on the oscilloscope, the mode was turned on by clicking the Measure button, then Ch1 and using the multipurpose switch to turn on frequency and Peak-to-Peak. Then the frequency was measured along with for Channel 1 () and for Channel 2 (). After this was recorded, the amplitude dial on the frequency generator was moved to adjust . Recordings for this and were recorded and this was repeated until 6 readings were obtained.

# **Data and Results**

## **Table**

_Table 1: The raw data for and in a table_

The potential difference across the resistor () (V) for an input voltage (V) for the RL circuit

(V)

(V)

0.192

2.16

0.128

1.48

0.272

3.14

0.340

3.86

0.428

4.96

0.244

2.80

## **Values**

The resistance was measured to be 21.8

The period was measured to be 0.0003510s

## **Graph**

Now we plot the data in Table 1. This is done to work out the gradient and intercept to work out the impedance

_Graph 1: The data in Table 1 plotted as a linear graph_

The potential difference across the resistor () (V) plotted against its input voltage (V) for the RL circuit

The input potential difference (V) supplied by the frequency generator

The potential difference across the resistor, (V) for an input potential difference (V)

# **Analysis**

## **Calculating the Uncertainty of the Resistance**

This was a digital reading, so a rectangular PDF. Thus,

The multimeter was rated at 1%, so

The full uncertainty budget for the resistance of the resistor:

**Uncertainty Component**

**Standard Uncertainty ()**

**Type of Uncertainty**

0.0288

Type B

0.218

Type B

So

## **Calculating the Uncertainty of the Frequency**

First the frequency is related to the period by

Now we know that

So we can use the frequency reading instead of the period to calculate the uncertainty (as they both are to the same number of significant figures)

This was a digital reading, so Hz

The oscilloscope was rated at 2% so Hz

The full uncertainty budget for the frequency:

**Uncertainty Component**

**Standard Uncertainty (Hz)**

**Type of Uncertainty**

0.289

Type B

57.0

Type B

So Hz

## **Calculating the Impedance**

From Graph 1, using the Linear Least Squares method, it was obtained that:

where and is the gradient and intercept respectively.

Now from Equation 1, so for and , we get

Thus the best approximation for

From , we get that

So

Thus

## **Calculating the Inductance**

From Equation (2),

So (3)

Thus the best estimate for H

Now we have that for . Thus

But by Equation (3), we have that

Now we have shown that for some variable , so using this for and :

Thus

Now we have that

So

So

Thus we have that H

# **Discussion**

From Equation (1), so theoretically Graph 1 should have an intercept at 0. It was calculated that

Now this means

Now 0 lies in this interval, so this is a valid result.

Factors influencing the measurements include:

*   The multimeter and oscilloscope only display the resistance and potential difference up to 3 significant figures.
*   The frequency on the oscilloscope is not constant and jumps around every second between some interval. This leads to the measurement of the frequency to be a best estimate as to what the oscilloscope is showing.

# **Conclusion and Recommendations**

## **Conclusion**

It was calculated that H and the aim has been met since the calculated results line up with the theoretical expectations for the equations (as mentioned in the Discussion).

## **Sources of Uncertainty**

*   The uncertainty related with the reading off of the oscilloscope screen
*   The uncertainty related to the rating of the oscilloscope
*   The uncertainty related to the rating of the multimeter
*   The uncertainty related to the reading off of the multimeter
*   The frequency jumps on the oscilloscope (not constant over time)

## **Recommendations**

*   Use a more accurate multimeter
*   Have an oscilloscope which provides more significant figures. This will provide stronger results and have the frequency not jump as much as it does.
*   Use the frequency stated on the frequency generator as this has more significant figures

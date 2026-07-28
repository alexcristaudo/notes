---
title: RC Report
type: lecture
status: needs-review
source: onedrive
assets: [RC-Report-2.docx]
---
> [!warning]
> Converted from .docx with 3 warning(s) — check tables and equations. Original attached.

**Capacitance of a Capacitor**

Peoplesoft ID: 1873229

Alexander Cristaudo

Student Number: CRSALE010

The RC Circuit

Date Performed: 20 September 2022

Partner: Michael Haydam

**Introduction and Aim**

An RC Circuit is a circuit consisting of a resistor, capacitor and, in this case, a frequency generator that drives the current through the circuit. In this arrangement, the resistor controls the charging and discharging of the capacitor. The frequency generator provides a potential difference , with part of this applied across a resistor, denoted by . The impedance, equivalent to the total resistance for an RC circuit, is given by:

where is the capacitance of a capacitor, and , the period of oscillation provided by the frequency generator. The peak current is also provided by . Using this, the following equation forms: . The aim is thus to use the frequency supplied by the frequency generator to calculate and to calculate theoretically and see if these results agree with each other

**Method and Apparatus**

**Apparatus**

*   A frequency generator
*   An oscilloscope
    *   This is used to calculate and
*   A resistor
*   A capacitor
*   Wire to connect the resistor and capacitor, as well as connecting the oscilloscope and frequency generator to the circuit
*   A digital multi-meter
    *   The multi-meter is used to calculate the resistance of the resistor

A diagram of the apparatus used to collect data for (V) and (V)

***(image omitted — open the attached original)***  
_Diagram 1_

A diagram of the multi-meter used to measure

***(image omitted — open the attached original)***

**Method**

Firstly, 2 leads are used to connect the resistor to the multi-meter. This was done by plugging one lead in COM and the other lead into . Now the other ends of the leads connect to the resistor. The function selection switch was changed to the function to turn the multi-meter into an ohmmeter. The measurement on the multi-meter was recorded after using the range button to get a better approximation for the resistance. After this measurement was made, the circuit in Diagram 1 was constructed. The resistor was connected to the capacitor and the function generator connected to both in series. Both channels from the oscilloscope were used. Channel 1 was connected across the resistor and capacitor (to measure ) and Channel 2 across the resistor (to measure ). Next, the setting on the oscilloscope was turned on by pressing the Measure button and selecting Ch1, then using the multipurpose button to select Peak-Peak. Then the function generator is connected in series to the resistor and capacitor. The peak-to-peak voltage on the frequency generator was set to 8 V. The frequency was then set to any frequency value from 2 to 8 kHz. That is, kHz kHz

The oscilloscope then displays as for Channel 1 and for Channel 2. These values were recorded along with the period on the oscilloscope (Channels 1 and 2 read the same period). The frequency was changed, and the measurements were taken once more for a total of 8 readings.

**Data and Results**

**Value for R**

The following value for was obtained

Calculation:

The value for _R_ was measured at .

This was a digital reading, meaning this is a rectangular PDF, so

Along with this, the machine is rated at 1%, so

Finally,

Yielding the result above

**Tables**

Table 1: _The raw data collected_: _(V), (V) and T(s) are from the oscilloscope and (kHz) is from the frequency generator._

A table showing the values for (V) and (V) corresponding to a measured (s) from the oscilloscope and (kHz) from the frequency generator

We convert the frequency from the frequency generator to a period, by

leading to:

Table 2: _The values for (s) for the frequency generator_

A table showing the frequency (kHz) as a period (s)

Example calculation:

For kHz, this is Hz.

Then s

This leads to the following ranges for and

Table 3: _The intervals for the period from the frequency generator () (s) compared to the period (s) shown on the oscilloscope ()_

The values for the period (s) from the frequency generator and the period of the oscilloscope (s), with uncertainty applied to the best estimate

Example Calculation:

There are two parts

1.  The uncertainty of

For , the frequency was kHz (as by Table 2)

So Hz. The frequency generator was rated at 1%, so

This was a digital reading, so this is a rectangular PDF so

Thus

Now

So

1.  The uncertainty of

For

The oscilloscope was used for this and has a rating of 2%, thus

This was a digital reading, so this is a rectangular PDF, so

So

Thus

Now we calculate (displayed by the oscilloscope)

Table 3: _The values for (s) calculated using the values from Table 1. We want these values because models a straight line with m =_

_and and_

A table showing the values for and _s_2)

Example Calculation:

For and

For kHz Hz

So Hz2

**Graphs**

Graph 1: _plotted against from Table 3_

plotted against(the period displayed on the oscilloscope)

for the period provided by the generator

displayed on the oscilloscope

**Analysis and Discussion**

**Calculating _C_ using the gradient for Graph 1**

Using the least squares method for Graph 1 to calculate :

Now , so:

To calculate the uncertainty of , first note that:

So

Concluding that F

m = 891006515.5891 +/- 36146151.7437 10^8 10^7

c = -0.4969 +/- 2.8029

**Checking the Validity of the Result using The Intercept**

Using the least squares method for Graph 1 to calculate :

Mathematically, we need , and we have so this is a valid result

**Calculating the Theoretical Value for**

**Checking the Validity of the Period displayed by the Oscilloscope**

We calculate the uncertainty for the frequency for both the oscilloscope and frequency generator

Example calculation:

Oscilloscope: The oscilloscope is rated at 2%. Thus for

**Conclusion and Recommendations**

**Conclusion**

**Discussion**

The calculation using the gradient yielded: so

whereas with the y-intercept, so

so, these values do not lie within each other. Reasons for this could be the imprecise measurement of _T_, using a stopwatch that only shows a value to 2 decimal places and relying on the user’s judgement as to when one period is completed

**Sources of Uncertainty**

*   Judgement as to when one period is completed
*   Uncertainty associated with the internal calibration of the stopwatch
*   Uncertainty associated with the stop watch’s figure
*   Judgement of the distance between the centre of mass and the hole (_r_)

**Ways to Improve the Experiment**

*   Use a more precise timer
*   Have some string attached to the timer and the metre stick so as to begin the timer just as the stick is released or some software that tracks when the metre stick passes its initial condition

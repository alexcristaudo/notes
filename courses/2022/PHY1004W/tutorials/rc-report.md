---
title: RC Report
type: tutorial
status: needs-review
source: onedrive
assets: [RC-Report.docx]
---
> [!warning]
> Converted from .docx with 3 warning(s) — check tables and equations. Original attached.

**The Capacitance (F) of a Capacitor in an RC Circuit**

Peoplesoft ID: 1873229

PHY1004W

Alexander Cristaudo

Student Number: CRSALE010

The RC Circuit

Date Performed: 20 September 2022

Partner: Michael Haydam

**Introduction and Aim**

An RC consists of a resistor, capacitor and, in this case, a frequency generator that drives a current through the circuit. In this arrangement, the resistor controls the charging and discharging of the capacitor. The frequency generator provides a potential difference , with part of this applied across a resistor, denoted by . The impedance (the total resistance for an RC circuit), is given by: where is the capacitance of a capacitor, and , the period of oscillation provided by the frequency generator. The peak current is also provided by . Using (1) and (2), the following equation forms: (Physics Department, 2022). The aim is thus to use multiple frequencies supplied by the frequency generator to calculate the capacitance of a capacitor and to use this mathematical model to provide some validity to the result.

**Method and Apparatus**

**Apparatus**

*   A frequency generator to provide an AC current with some frequency and potential difference
*   An oscilloscope (to measure and
*   A lunchbox consisting of a capacitor connected to a resistor, with additional connection points for the oscilloscope and function generator
*   Leads to connect the oscilloscope and frequency generator to the circuit and leads to connect a circuit to the 2 channels on the oscilloscope. These leads are also used to measure the resistance
*   A digital multi-meter (to calculate the resistance of the resistor)

A diagram of the apparatus used to collect data for (V) and (V)

***(image omitted — open the attached original)***

_Diagram 1_

Capacitor

Resistor

(Physics Department, 2022)

A diagram of the multi-meter used to measure

***(image omitted — open the attached original)***

(Physics Department, 2022)

_Diagram 2_

**Method**

Firstly, 2 leads were used to connect the resistor to the multi-meter. This was done by plugging one lead in COM and the other lead into . Now the other ends of the leads connect to the resistor. The function selection switch was changed to the function to turn the multi-meter into an ohmmeter (Physics Department, 2022). The measurement on the multi-meter was recorded after using the range button to get a better approximation for the resistance. After this, the circuit in Diagram 1 was constructed. The oscilloscope was connected to the lunchbox such that both channels were used with channel 1 connected across the resistor and capacitor (to measure ) and Channel 2 across the resistor (to measure ). Next, the setting on the oscilloscope was turned on by pressing the Measure button and selecting Ch1, then using the multipurpose button to select Peak-Peak. Then the function generator is connected in series to the resistor and capacitor. The peak-to-peak voltage on the frequency generator was set to 8 V and the frequency set to any frequency value from 2 to 8 kHz. That is, kHz kHz. The oscilloscope then displays as for channel 1 and for channel 2. These values were recorded along with the period on the oscilloscope (Channels 1 and 2 read the same period). The frequency was changed, and the measurements were taken once more for a total of 8 readings.

**Data and Results**

**Value for R**

The value for was calculated to be:

This was done by first measuring .

Then this was a digital reading, meaning this is a rectangular PDF, so

Along with this, the machine is rated at 1%, so

_Table 1: Showing the uncertainty budget for one resistance reading_

An uncertainty budget for the resistance reading

**Uncertainty Component**

**Standard Uncertainty ()**

**Type of Evaluation**

Type B

Type B

Combined standard uncertainty:

Yielding the result above

**Tables and Graphs**

A table showing the values for (V) and (V) corresponding to a measured (s) from the oscilloscope and (kHz) from the frequency generator

Table 2: _The raw data collected from the oscilloscope and frequency generator to use_

We convert the frequency from the frequency generator to a period, by :

A table showing the frequency (kHz) from the frequency generator as a period (s)

Example calculation:

For kHz, this is Hz.

Then s

Table 3: _Converting frequency to a period for the frequency generator_

This leads to the following ranges for and

The values for the period (s) from the frequency generator and the period of the oscilloscope (s), with uncertainty applied to the best estimate

Table 4: _Showing the intervals for the period by the frequency generator and that displayed on the oscilloscope_

Example Calculation:

There are two parts

1.  The uncertainty of for this example, the frequency was kHz (as by Table 2)

Hz. The frequency generator was rated at 1%, so Hz

This was a digital reading, so this is a rectangular PDF so Hz

Table 5.1: _Uncertainty budget for (i)_

Uncertainty budget for this example case

**Uncertainty Component**

**Standard Uncertainty (Hz)**

**Type of Evaluation**

Type B

Type B

Combined standard uncertainty: Hz

So

1.  The uncertainty of for this example.

The oscilloscope was used and has a rating of 2%, thus

This was a digital reading, so this is a rectangular PDF, so

Table 5.2: _Uncertainty budget for (ii)_

Uncertainty budget for this example case

**Uncertainty Component**

**Standard Uncertainty (s)**

**Type of Evaluation**

Type B

Type B

Combined standard uncertainty:

Thus

From this (displayed by the oscilloscope) can be calculated

A table showing the values for and _s_2)

Example Calculation:

For and

For kHz Hz

So Hz2

Table 6: _The values of and because this models a straight line with m = and c = 1 by (3)  
_plotted against(the period displayed on the oscilloscope)

for the period provided by the generator

displayed on the oscilloscope

Graph 1: _plotted against from Table 6. Using the gradient, the capacitance can be calculated and is done below_

**Analysis and Discussion**

**Calculating _C_ using the gradient for Graph 1**

By using the least squares method for Graph 1 to calculate :

Now by (3) so:

Now note that

Meaning,

Concluding that F

**Checking the Validity of the Results**

Firstly, the least squares method for Graph 1 is used to calculate :

Mathematically, we need , and we have so this is a valid result

Now Table 3 shows all the period values shown on the oscilloscope and the period value calculated from the frequency generator. These need to agree with each other, which is the case because all the intervals for the oscilloscope overlap for some period values with the corresponding frequency generator periods. Thus, the period of the oscilloscope agrees with the period calculated from the frequency on the frequency generator

**Conclusion and Recommendations**

**Conclusion**

It was calculated that F and that the calculated intercept is valid with the period from the oscilloscope agreeing with the period of the frequency generator, so the aim has been achieved

**Discussion**

Factors that may have influenced measurements include:

*   Not enough digits provided by the oscilloscope. The oscilloscope provided 3 significant figures. More digits would provide a better estimate for
*   The slight difference between the period on the oscilloscope and frequency generator may slightly affect the final calculated value for
*   Lost potential difference to the resistance of the wire slightly changes the value for

**Sources of Uncertainty**

*   Reading off the display on the multi-meter, frequency generator and oscilloscope.
*   The rating of the multi-meter, function generator and oscilloscope.
*   The period of the oscilloscope constantly changing by small amounts
*   The slight difference in the period displayed in the oscilloscope compared to the calculated value from the frequency by the frequency generator

**Bibliography**

*   Physics Department. 2022, Introduction to the digital oscilloscope, \[PHY1004W lecture notes\], Department of Physics, University of Cape Town
*   Physics Department. 2022, RC Circuits, \[PHY1004W lecture notes\], Department of Physics, University of Cape Town
*   Physics Department. 2022, Practical 5: Circuits, \[PHY1004W lecture notes\], Department of Physics, University of Cape Town

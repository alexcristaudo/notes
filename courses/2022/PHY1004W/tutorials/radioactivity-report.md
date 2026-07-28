---
title: Radioactivity Report
type: tutorial
status: needs-review
source: onedrive
assets: [Radioactivity-Report.docx]
---
> [!warning]
> Converted from .docx with 4 warning(s) — check tables and equations. Original attached.

**The Absorption Coefficient of an Unknown Material**

Peoplesoft ID: 1873229

PHY1004W

Alexander Cristaudo

Student Number: CRSALE010

Radioactivity

Date Performed: 04 October 2022

Partner: Michael Haydam

**Introduction and Aim**

A source of Co emits gamma rays and some of these gamma rays can be shielded away from an observation point by an “absorber” with a specific linear absorption coefficient (a measure of how well the absorber absorbs a beam of radiation per unit thickness of absorber (Medical Dictionary, n.d.)). The linear absorption coefficient of a material is dependent on the density of the material of the absorber (with a greater density allowing for more absorption) (Wasan, Jassim, & Ammar, 2019). The linear absorption coefficient, , satisfies where is the radiation measured from the source with no absorber present and is the observed radiation for thickness . Thus, the aim of this is to use this formula to calculate the linear absorption coefficient of an unknown material which has the same density as lead, but is different to lead, and show this coefficient is the same as the coefficient of lead.

**Method and Apparatus**

**Apparatus**

*   A Geiger Machine, used to measure the counts (a measure of radiation) emitted through the absorber over a period of time
*   4 Slabs of the same unknown material (thickness does not matter). This is to get a range of values to plot to work out the linear absorption coefficient
*   A slab of lead
*   A ruler, to measure the thickness of the slabs and slab of lead
*   A radioactive source of Co

A diagram of the apparatus used

*(image omitted — open the attached original)*

_Diagram 1_

**Method**

First, the Geiger Machine was configured by switching it on, waiting until it was set up, then pressing SELECT and changing the “Adjust Gate Time” setting to 60 seconds, then pressing SELECT to confirm this. Note if the voltage is not 550V, it must be configured to this first before pressing SELECT to change the time. Next, the natural radiation was observed by pressing the START-STOP dial. After 60 seconds, the displayed number of counts was recorded. This was repeated four times to get 4 readings. Next, the source was set at some distance from the Geiger tube (this is not important, must just remain fixed). The START-STOP dial was pressed to get a reading with no absorber. This was done 4 times and each recording was recorded. Next, one slab was taken and the length of this was measured using a ruler. The slab of the absorber was placed between the source and Geiger tube (as displayed above) and 4 readings with that slab were recorded. Another slabs thickness was measured and then placed next to the first absorber and 4 readings were taken again. This was done for all 4 slabs. After this, the slabs were removed, and the slab of lead was placed. The lead slab’s thickness was measured and the counts with this slab as an absorber were measured to get 4 readings.

**Data and Results**

**Tables and Graphs**

_Table 1: Showing the raw data for the method above_

A table showing the 4 readings for the counts of each reading along with the thickness (mm) of the slabs used

**Number of slabs**

**Thickness of the Slabs used (mm)**

**Count readings for that thickness**

0

No slabs

193; 190; 176; 184

1

2

127; 129; 127; 137

2

2; 3

92; 119; 115; 117

3

2; 3; 2

109; 101; 99; 103

4

2; 3; 2; 3

92; 89; 91; 80

Now we need to consider the natural background. The counts for the natural radiation was measured at: 22; 22; 18; 13. Thus counts per minute. So, by averaging the thickness and the counts and subtracting this natural background, we get:

_Table 2: Showing the raw data from Table 1 after averaging and accounting for the natural background_

A table showing the average number of counts of each reading along with the total thickness (mm) of the slabs used

**Number of slabs**

**Thickness of the Slabs used (mm)**

**Count readings for that thickness (per minute)**

0

0

167

1

2

111

2

5

92.0

3

7

84.2

4

10

69.2

_Example Calculation with 0 slabs:_ so

For the lead block, the counts were measured as: 86; 67; 84; 75

Now the best approximation for lead is: counts.

The length of the lead block was measured to be 12mm

Note that for the lead block

Our initial equation was: . Now we calculate for each

_Table 3: The data from Table 2 used to get for each_

Table showing and used to plot Graph 1

(mm)

2

\-0.408

5

\-0.596

7

\-0.685

10

\-0.881

_Graph 1: Plotting the data from Table 5 to get a line of best fit and calculate the linear absorption coefficient_

Depicting the linear relationship between and the thickness (mm) of an absorber*(image omitted — open the attached original)*

for each an absorber with thickness (mm)

The thickness of the absorber (mm)

**Analysis and Discussion**

**Calculating with Graph 1**

Our initial equation was:

This is in the form _Y=mX_ which is why we plot the data in Table 3 to get Graph 1

Using the least squares method on Graph 1, we get:

So mm\-1 and

So mm\-1

**Calculating with Lead Block**

Rearranging the equation gives

Firstly, there is an uncertainty in the length reading. Since this is a triangular PDF, mm

Now on the lead block for and so

To calculate the uncertainty, first set . Then

Now (Toggerson & Philbin, 2021)

But

Now we get and

The uncertainty for a scatter of data is given by:

Using this, we get

Moreover, if we assume the machine is rated at 1%, so

Now

So

This gives

_Table 3: The uncertainty budget for the reading of the lead_

An uncertainty budget for the lead block

**Uncertainty Component**

**Standard Uncertainty (Counts)**

**Type of Evaluation**

Type A

Type B

Combined standard uncertainty:

Now to get the uncertainty of the counts with no absorber:

The uncertainty for a scatter of data is given by:

Using this, we get

So

Meaning

So we can conclude that

So mm\-1

**Conclusion and Recommendations**

**Conclusion**

From the Graph analysis, mm\-1

From the Lead block, mm\-1

So the aim has not been met since these intervals do not overlap, they do not agree with each other. It was also obtained that and by the theoretical equation

, we need that , so the result does not back the theoretical equation and is thus not reliable.

**Discussion and Ways to Improve the Experiment**

The Experiment can be improved by:

*   Using a more accurate machine
*   Providing a means of measuring the thickness in a more accurate way such as thicker slabs

**Sources of Uncertainty**

*   The machine estimating the duration of 60 seconds
*   There is a difference in counts for the same distance and same “absorber”. This difference was sometimes very large
*   Measuring the thickness of the absorber
*   Uncertainty with the rating of the machine

**Bibliography**

1.  Medical Dictionary, n.d. _Linear absorption coefficient._ Available: [https://www.google.com/search?q=linear+absorption+coefficient&rlz=1C5CHFA\_enZA991ZA991&oq=linear+absor&aqs=chrome.1.69i57j0i512j69i59j0i512l4j69i60.4216j0j7&sourceid=chrome&ie=UTF-8](https://www.google.com/search?q=linear+absorption+coefficient&rlz=1C5CHFA_enZA991ZA991&oq=linear+absor&aqs=chrome.1.69i57j0i512j69i59j0i512l4j69i60.4216j0j7&sourceid=chrome&ie=UTF-8) \[2022, October 14\]
2.  Toggerson, B. & Philbin, A. 2021. _PHYSICS 132 LAB MANUAL._ Available: [https://openbooks.library.umass.edu/p132-lab-manual/chapter/uncertainty-for-natural-logarithms/](https://openbooks.library.umass.edu/p132-lab-manual/chapter/uncertainty-for-natural-logarithms/). \[2022, October 14\]
3.  Wasan, H., Jassim, M. & Ammar, H. 2019. _Measurement technique of linear and mass attenuation coefficients of polyester – Bentonite composite as gamma radiation shielding materials._ Available: [https://aip.scitation.org/doi/pdf/10.1063/1.5123088#:~:text=4%2D%20The%20linear%20absorption%20coefficient,attenuation%20coefficients%20of%20this%20material](https://aip.scitation.org/doi/pdf/10.1063/1.5123088#:~:text=4%2D%20The%20linear%20absorption%20coefficient,attenuation%20coefficients%20of%20this%20material). \[2022, October 14\]

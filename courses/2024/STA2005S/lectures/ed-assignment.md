---
title: ED Assignment
type: lecture
status: needs-review
source: onedrive
assets: [ED-Assignment.docx]
---
> [!warning]
> Converted from .docx with 3 warning(s) — check tables and equations. Original attached.

CHANGE TO GROW IN GARDEN

USE POTS AS EXPERIMENTAL UNITS

USE PLANTS THAT GROW QUICKLY (beans, flowers, bamboo)

1.  Define the objectives

To test whether there is an effect of different fertilizers on crop yield

To determine which fertilizers are the best

1.  Identify all sources of variation, including
    1.  treatment factors and their levels

The treatment factors are the different fertilizers used. There will be 4 different fertilizers, Omnia Fertilizer, Purefert, LM Marketing and Kynoch Fertilizer.

*   1.  experimental units

The experimental units are the plot of land being used. Some experimental unit sources of variation include exposure to pests in each plot of land

Rainfall levels / water levels

Sunlight exposure

Temperature

*   1.  blocking factors

The blocking factors are:

The type of soil

The crop variety

The size of the gradient of the soil

Other sources of variation:

1.  Choose a rule for assigning the experimental units to the treatments.

Randomization below

1.  Specify the measurements to be made, the experimental procedure, and the anticipated difficulties.

Measurement: The total weight of the produce from each plant (after harvesting) is the measurement for that plant

The experimental procedure:

Anticipated difficulties:

Time-consuming

Labour costs

No replication involved

The small sample size may mean less power in the experiment

1.  Specify the model.

A Graeco-Latin square model is used for 3 blocking factors \[assume no interaction\]

This is modelled by:

is the response matrix

1.  Outline the analysis.

Get data

Test for

ANOVA table

Comment on p-value for treatment

Use tukey’s multiple comparison of means to compute all pairwise comparisons

Could display differences in means as CIs: see page 106

1.  Review above decisions and revise where necessary.
2.  Pilot study?

3) Randomization

Start with a standard Graeco-Latin Square. The Graeco Latin squar can be thought of as Latin Square with a third blocking factor added which is represented by the Greek letters. Alpha, Beta, Gamma and Delta.

In our case each row represents a level of ‘crop type’, each column represents a level of ‘soil type’ and each Greek letter represents a level of ‘gradient’. See the following key of levels and their respective meaning:

\---)

The standard Graeco-Latin Square looks as follows:

\----)

We randomly permute the rows and columns using R and arrive at the following Graeco-Latin Square.

\----)

See the following key of ordered fertilizer types:

\---)

In order to randomly assign the treatment factor (fertilizer type) to experimental units, we use R to create every possible permutation of experimental units A, B, C and D. Then we use another R function to randomly select a permutation of these Letters.

The first letter that comes up is assigned to treatment 1, … and so on with treatment 1,2,3,4 being decided prior to the permutation being generated

The permutation is as follows: B, C, D, A

We match each Soil type to its position in the permutation, meaning the following assignment occurs:

\---)

Randomize the order in which the crops are harvested and the order that they are planted

Do the same permutation idea. Number plots 1 – 16, and experimental units A - P and generate a random permutation of letters

**1\. Agricultural Experiment with Additional Factors**

*   **Objective:** To test the effect of different fertilizers on crop yield.
*   **Blocking factors:**
    *   Type of soil (first blocking factor)
    *   Crop variety (second blocking factor)
    *   Plot orientation (third blocking factor, e.g., north, south, east, west)
*   **Experimental treatments:** Different fertilizers (factor being tested)
*   **Experiment design:** Each combination of soil type, crop variety, and plot orientation would appear with every fertilizer type, controlling for the variability from all three sources.

4) Experimental Procedure:

Secure one big plot of land, and divide the land into 16 suitable plots, with the plots large enough such that the effect of growing a plant in one plot does not affect any other plots. The use of one big land will minimise temperature and rainfall variance. Within each plot, the plants should be equally spaced apart. After the Graeco-Latin square has been permuted, replace the appropriate plots with their chosen soil type, then terraform the selected plots to the desired slope and plant the selected type of crop in each plot. Keeping in mind that the crops are planted in the desired order. Fertilize the desired plots according to the randomized permutation.

Hire Braden Pillay to do this \[He gets a couple of cents every day he does this\]: Water the plots regularly, based on the plant type and how much water that plant needs, and after 4 months, harvest the crops in the selected order. Weigh each plot’s produce after harvesting and record the weight. That is the observation for that experimental unig

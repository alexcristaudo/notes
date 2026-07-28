---
title: Src OS2
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-OS2.tex]
---
> [!warning]
> Compiled from **src-OS2.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

pdf{OS2Title.pdf}

## Overview

Simulation runs were conducted for varying numbers of patrons, corresponding to 100, 200, ..., 1000. For each simulation, the response time, waiting time, and turnaround time of every patron were logged. Throughout the simulations, the throughput was monitored at regular intervals to calculate an average. Specifically, the throughput was computed each time a multiple of 10 patrons received their drinks. These data points were recorded for each of the scheduling algorithms: FCFS (First Come First Serve), SJF (Shortest Job First), and RR (Round-Robin). It's worth noting that for the Round-Robin implementation, a quantum value of 100 was utilized for these average calculations.

## Graphs

### Average Response Time

{OS2_assets/response.png}

### Average Waiting Time

{OS2_assets/waiting.png}

### Average Turnaround Time

{OS2_assets/waiting.png}

### Average Throughput

{OS2_assets/throughput.png}

## Discussion

### Waiting time and Turnaround Time

Note that the graphs for waiting time and turnaround time are almost identical, as the values for these metrics differ by only the order length for a patron. This is because waiting time is the time spent on the queue for a job (drinks in this case) and turnaround time is how long it takes for a drink to be completed. For this reason, both graphs are discussed together.
As we can see in the graphs, SJF is the quickest in terms of waiting and turnaround time. FCFS follows afterwards, and RR is the slowest. A reason for RR being the slowest is that the overhead time (adding to a queue and checking whether the current process is running for "quantum" time, or less), must be too large and so the benefits of RR are not achieved. This means that, in terms of how long each patron will wait, SJF is the best.

### Throughput

We see the average throughput for SJF and RR are very similar. On the other hand, FCFS has a much higher average throughput. This is because SJF and RR don't complete the large drinks of patrons (in the case of RR, in the first few cycles) for a while. On the other hand, in the case of FCFS, once one patron's drink is being processed, the whole patron will be completed thus increasing the throughput. Note that at the end of the program, the scheduling algorithms will have roughly the same throughput, but because SJF and RR finish most of their patrons later on, their throughput starts low and grows larger.

### Response Time

Response time refers to the duration it takes for a patron to receive their initial drink. Upon analysis, it's observed that SJF exhibits the shortest response time, trailed by RR and lastly FCFS. Notably, SJF demonstrates a considerable lead over the other two methods, while RR slightly outperforms FCFS. The reason SJF is the quickest is that most patrons will have a drink with a lower execution time and thus they receive their drink quickly.

## Predictability

The predictability of a scheduling algorithm is linked to the standard deviation relating to that metric. One example of the standard deviation is shown below.
The variability of First Come First Serve is the lowest by a large margin, followed by Shortest Job First, then Round Robin. This means First Come First Serve has the best predictability. This is because the times for FCFS are always roughly similar to the other observations close by. The patron number allows one to roughly predict the metrics for FCFS. This is not the case for SJF and RR. Some patrons will finish getting their drinks very quickly, and some very long (depending on their drinks ordered).
Example: Waiting time for 100 Patrons
$\sigma_{\text{FCFS}} \approx 8213 \\ \sigma_{\text{SJF}} \approx 11612 \\ \sigma_{\text{RR}} \approx 12565$
We conclude that for predictability, FCFS is the best, followed by SJF and RR

## Fairness

Fairness refers to patrons being served in an equal manner. In this case, FCFS and RR both exhibit better fairness. The order in which drinks are executed is the order they are added to the queue. The execution does not depend on the execution time. On the other hand, SJF is not fair. Any costly drink (such as the "B52" with the longest execution time) is not prepared until every other drink in the queue is already complete.

## Starvation

Starvation refers to whether a job can go an extended period of time without having some CPU time. In this case, it refers to whether a job can go a very long time without being completed (or partially completed) by the bartender. So SJF has a much higher probability to suffer from starvation issues. If someone was to request drink "B52" (with the longest waiting time), then that patron would have to wait until all the other drinks are completed before the barman prepares this drink. With high numbers of patrons, this leads to this patron not getting his drink completed/partially completed for an extended amount of time. On the other hand, FCFS and RR are less likely to suffer from starvation issues because drinks are executed in the order they appear in the queue. In the previous example, the bartender will prepare the B52 if it is first in the queue, regardless of the other drinks. This does give rise to an issue in that if there are a lot of B52's at the front of the queue, items at the back will possibly be starved for a FCFS scheduling algorithm. This is because FCFS will complete the B52 before proceeding. In this case, RR is the best algorithm for starvation as every drink has an equal chance to start being prepared, and if there are any time costly drinks, they are partially prepared and added back to the queue. So in conclusion, RR is the best for starvation, followed by FCFS, then SJF

## Recommendations

I would recommend the Shortest Job First schedule for Andre. This has the best performance in terms of waiting time and response time. Thus by Andre utilising SJF, he will be more efficient and minimise the average waiting time for the Patrons. Moreover, SJF has the best performance for response time.

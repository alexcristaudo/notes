---
title: INF2009F BusinessCase template 2023 comments (2)
type: lecture
status: needs-review
source: onedrive
assets: [INF2009F_BusinessCase-template-2023_comments-(2).docx]
---
> [!warning]
> Converted from .docx with 12 warning(s) — check tables and equations. Original attached.

*(image omitted — open the attached original)*

**Department of Information Systems**

**Systems Analysis (INF2009F) – 2023**

**BUSINESS CASE: Phumla Kamnandi Business Case**

**TEAM MEMBERS**

Student number: CPMMIC001

Name: Michael Copeman

Student number: CRSALE010

Name: Alexander Cristaudo

Student number: VLNSHA004

Name: Shaylin Velen

Student number: WHTALE015

Name: Alexander White

**Declaration**

1.  We know that plagiarism is wrong. Plagiarism is to use another's work and pretend that it is one's own.
2.  This Business Case Document is our own work.
3.  We have not allowed and will not allow anyone to copy our work with the intention of passing it off as their own work.

**Team Member**

**Signature (Initials)**

**Date**

Michael Copemen

MC

06/04/2023

Alexander Cristaudo

AC

06/04/2023

Shaylin Velen

SV

06/04/2023

Alexander White

AW

06/04/2023

**TABLE OF CONTENTS**

[1\. BUSINESS OVERVIEW 1](#_Toc131697770)

[2\. BACKGROUND 1](#_Toc131697771)

[3\. BUSINESS PROBLEMS AND OPPORTUNITIES 2](#_Toc131697772)

[3.1. Overview of current processes 2](#_Toc131697773)

[3.2. Problems](#_Toc131697774)

[3.3. Opportunities](#_Toc131697775)

[4\. SYSTEM OBJECTIVES](#_Toc131697776)

[4.1. Goal](#_Toc131697777)

[4.2. Objectives](#_Toc131697778)

[5\. SYSTEM SCOPE](#_Toc131697779)

[5.1. Major business activities](#_Toc131697780)

[5.2. Statement of Scope](#_Toc131697781)

[6\. ALTERNATIVE SOLUTIONS](#_Toc131697782)

[6.1. Solution 1](#_Toc131697783)

[Introduce a standardised reservation system.](#_Toc131697784)

[6.2. Solution 2](#_Toc131697785)

[6.3. Solution 3](#_Toc131697786)

[6.4. Comparison of solutions](#_Toc131697787)

[7\. RISK ASSESSMENT 18](#_Toc131697788)

[8\. FEASIBILITY ASSESSMENT 20](#_Toc131697789)

[9\. PROJECT SCHEDULE AND RESOURCES](#_Toc131697790)

[10\. RECOMMENDATIONS TO MANAGEMENT](#_Toc131697791)

[11\. Business Case Evaluation Form – Project Team #30 26](#_Toc131697792)

# BUSINESS OVERVIEW

Phumla Kamnandi Hotels is a hotel group, with thirty hotels in its portfolio across South Africa. Each hotel runs independently but is fundamentally linked to the Phumla Kamnandi business vision, and benefits from the partnership through, amongst others, marketing, customer-base, and training. The Phumla Kamnandi Group is headquartered in Century City in the Western Cape. The strategic goals for Phumla Kamnandi involve moving towards adopting business processes that are standardized across all hotels to establish and propagate the ‘Phumla Kamnandi’ experience as one that is more efficient and cost-effective.

# BACKGROUND

The overall image and the organisational culture of hotels vary significantly within the group. Processes are inefficient, prone to fraud, wasteful and costly. Thus, management has taken the decision to adopt standardised business practices to provide similar, high-quality service at every hotel in the group.

The group hopes to establish a positive brand image in the minds of its customers. A major way the group aims to do this is by implementing new automated computer systems across all the hotels in the group. Management intends to gain standardised, best-practice business processes. Management also wishes to present a similar appearance of accounts and client-facing documents and a reduction in the total cost of ownership across the whole group. In streamlining and standardising processes, the business hopes to reduce costs, increase customer satisfaction and retention, and increase the efficiency of business processes.

# BUSINESS PROBLEMS AND OPPORTUNITIES

## Overview of current processes

Currently, several processes within the group and hotels have the potential to be automated. Currently, several processes such as accounting and reservations are labour-intensive, requiring a lot of manual time from the users. This wastes both time and money.

The processes currently in AS-IS practice are as follows:

*   Enquiries and reservations are made by a guest/travel agent contacting via email and phone. Few enquiries can be dealt with without the reservations clerk being involved themselves. Should the guest/travel agent place the booking, further details about the person staying are obtained and if the rooms they want are available, the reservation is confirmed and recorded.
*   The reservations clerk will also request for a credit card number to make a deposit and ensure the room is secured for that person and Phumla Kamnandi gives their guests up to 7 days to make this deposit. Room service operates by prioritising cleaning a room associated with new guests arriving that day. As part of the room allocation process, each night a list of expected departures and arrivals is produced for housekeeping to use and reception to use to update guest accounts.
*   When a guest arrives, they fill out registration forms and get both a room access key and a guest card. The guest card is used to charge fees to their guest account.
*   Room service cleans and replenishes consumables such as tea, coffee, soaps, and towels. The linen on each bed is changed weekly, for each new guest, or if it is damaged.
*   The accounting system keeps separate accounts for each room in the hotel. Accounts are declared open from check in time and closed once after check out. The software to do these processes differs for each hotel.
*   The hotel also provides services such as laundry, room service, housekeeping and babysitting that can be charged to a guest’s account. This is charged onto the guest's account by a ‘chit’ system, where a guest signs a voucher for the service which then gets forwarded to accounts processing.
*   The accounts are updated every night, except for breakfast which is included in the room tariff. The room tariff for accommodation is charged to an account every day and any discounts, promotions and prepayments also get recorded. Guests get charged should they make calls from the phone in their room and reception can print a call summary should the guest request it.
*   The hotel follows up with debtors who do not settle their account on check out and monthly statements are sent as reminders. The hotel also follows up on bad debt.
*   The hotel regularly restocks obsolete, damaged, and lost goods.
*   The hotels opt for bulk orders for any promotional consumables.
*   Reception and each service point in the hotel accepts cash. At the end of every day the cash is counted and forwarded to the bookkeeper

Reservations are processed as depicted in _Diagram 1_ on the following page.

_*(image omitted — open the attached original)*_

**Activity Diagram Narrative:**

The activity of making a manual guest booking within the current system begins with a phone call from the guest. The receptionist will pick up the phone and work with the guest to find suitable dates and rooms, remaining at this point of the process until they are found. Once suitable dates are found the receptionist requests to confirm the booking with the guest. If the guest chooses to proceed, the receptionist saves the details of the guest if they are a new customer and records the booking into the system. The deposit payment process then begins, if the customer chooses to pay it. Should they choose to pay a deposit they will be asked for their credit card details, upon which they will be charged through an external credit card bureau. If not, or once the payment is confirmed, then the booking is finalized, a confirmation email is sent, and the customer is made aware over the telephone that the booking is complete.

## Problems

**Accounts**

*   Accounts are only updated at night. Missed charges occur resulting in financial loss for the business, there also are no real-time updates for guests. Resolving this problem will result in fewer missed charges, more robust data transfer, better real-time data for business analysis and real-time updates for guests.
*   The chit system has a high potential for error and fraud. The system is labour intensive and thus, inefficient taking up time and potentially losing the business money through fraud. Resolving this problem will lead to reduced error, more accurate data capture, and preventing unethical activity and fraud.
*   Accepting email confirmation without deposits. This leads to lapsed bookings with guests still arriving or bookings where guests do not arrive. Income can be lost and because of poor business image guest numbers may decline. Resolving this problem will lead to a reduced loss of income, better brand image, better communication, and increased customer satisfaction.

**Human Resources**

*   Hotel managers have the power to individually recruit and dismiss staff. This practice is not completely ethical, there can be unfair dismissals and there is a lack of oversight. Resolving this problem will lead to more ethical practices, fewer unfair dismissals, and better oversight.
*   Individual hotel managers have too much power over tax and benefits. These are not standardised across the group. There is a lack of division of duties and compliance meaning that the business could be more ethical and less susceptible to fraud. Resolving this issue will result in better ethics and less loss of revenue to fraud through the division of duties and better compliance.
*   Training is planned by a specific hotel manager. Thus, training is not standardized across the group. Different training regimes may result in varying customer experiences when interacting with employees, a key issue Phumla Kamnandi is trying to rectify. Reduced efficiency, processes take longer to perform, and troubleshooting takes longer to complete. Training costs are higher as staff need to retrain if they are moved to different hotels. Resolving this problem will mean that we have better training for standard systems. Staff can then work for any hotel since they have the same training for standardised systems. Evaluation of training can be done which allows the training to be adjusted for its shortcomings.

**Reservations**

*   No guest reservation hardware and software standards across the hotel group with poor integration. This causes high costs for training and process inefficiency. Resolving this problem will lead to easier training, improved staff efficiency when conducting business processes (e.g., improved check-in/out times). Potential employee cross-hotel mobility will be greatly increased since there will be less of a learning curve in terms of differences between hotels.
*   Manual room reservation registers that are not always up to date lead to over/under booking the hotel. Under-booking the hotel leads to a loss of income when rooms are empty. Overbooking the hotel also means that alternative plans may have to be made for guests which will cost the business more. Resolving this issue will result in a reduced loss of income and increased customer satisfaction.
*   No reservation software support. The system has high levels of down-time, reducing efficiency in business processes like managing reservations. Resolving this problem will lead to less down-time, issues can be solved more easily, less inconvenience to guests. Overall, more efficiency and productivity from the software.

## Opportunities

*   Merge the room access card and guest ID card into one card. Results in fewer items for a guest to look after (less chance of cards being lost) and lower costs of maintaining card supply.
*   Implement a unified accounting package and credit control system across the group. This means fewer errors, less complexity in records, more accurate analysis of data, richer data-driven picture of the overall group's functioning while maintaining granular detail.
*   Adapt guest accounts system to allow for charging after their stay. Can thus recoup costs if it is discovered that a guest has not been charged for something they should have been charged for, e.g., a broken item or extra meal.
*   Automated inventory system for bar fridge requiring guest sign-off. As a result, don't rely solely on bar staff and/or housekeeper's integrity to manage restocking, usage, and billing.
*   Allow guests to choose charges to be applied to the room or to guests' cards individually. Enables bill splitting and individuals only being charged for what they have personally used. While groups can still bill together if they want to, e.g., families.

# SYSTEM OBJECTIVES

## Goal

Many of the labour-intensive processes of the group should be automated and there should be a higher degree of standardisation for processes and training across the group. This will enable more efficient processes, reduced costs, and a more ethical business setup.

## Objectives

Objectives are classified under four main groups, specifically: Accounts, Human Resources (HR), Administration, and Reservations.

**Accounts**

1.  Phased in for the next accounting year, introduce an accounting system which allows accounts to be updated in real-time after a transaction is made.
2.  Complete removal of 'chits', forcing payments to be made either in cash or by scanning guest card. Distribute sufficient card scanning hardware throughout hotels to facilitate payments. Remove facilities which allow chit-based payment. Phase in over the next six months.
3.  Introduce one standard accounting package to be used by all hotels in the group for the next accounting year. Provide short training course as and where phased in.
4.  Alter the accounts management system group-wide to allow charging onto a guest's account after the closure of their account. This should be phased in within the next accounting year.

**Human Resources (HR)**

1.  Introduce a corporate HR to approve of any firing of staff members after a complaint is raised by another member within the next month.
2.  Hire an accountant to manage the tax and benefits of employees by the next accounting year.
3.  Produce and distribute a standardised training program for all hotels within the next month.

**Administration**

1.  Over the next two months, replace individual room access cards and guest ID cards with a single card that serves both purposes. This must be done groupwide.
2.  Introduce group-wide, accessible software support within the next month via the expanding of the existing group-wide IT team and its roles.
3.  Allow guest to choose charges to be applied to the room or to guests' cards individually. Phase this in within the next month.

**Reservations**

1.  Introduce a unified reservation management system across hotels in the group with the same software and hardware. This should be phased in within the next 24 months.
2.  Implement automated deposit system that reminds a guest 24 hours before their deposit is due, sends a payment link and automatically cancels their booking if it's not paid. This makes the room available for other guests to book. This should be phased in within 2 months.
3.  Automate room reservation registers using a centralized group database. This should be phased in within 24 months.

# SYSTEM SCOPE

## Major business activities

*(image omitted — open the attached original)*

**Package Diagram Narrative:**

In the TO-BE system for the Phumla Kamnandi Hotel Group all data and transactions processed by hotels in the group are stored centrally in the head office system. Crucial parts of the data are backed-up to an external cloud server.

Purchasing is dependent on planning and forecasting. This allows us to determine quantities to purchase and the associated, expected purchasing costs. Guest account management charges guest accounts based on information received by the point of sale and housekeeping systems. Guest account management needs guest information from reservation management.

The standardised accounting system used in the back office of every hotel depends on the marketing, guest account management, and stock control and logistics to record and report on the financials of every hotel. Stock control and logistics depends on the catering system for stock taking and stock management purposes. The credit card bureau is used as an external system to process credit transactions by guests as well as transactions made by the hotel group / an individual hotel.

## Statement of Scope

**In Scope**

Subsystem 1: Human Resources

Functionality:

*   Database storage containing information regarding stakeholders in the business.
*   System for processing payroll and keeping track of employees hired or fired.
*   Storage for digital legislation related to HR.

Subsystem 2: Reservation management system

Functionality:

*   System to manage bookings.
*   Bookings are made through this system.
*   Updating of hotel capacity and room occupancy.

Subsystem 3: Accounting system

Functionality:

*   Guest accounts processing and recording.
*   Rollbacks of transactions.
*   Closing guest account.
*   Recording inventory purchases and business expenses.
*   Manages financial reports of the business.

Subsystem 4: Central purchasing

Functionality:

*   Large acquisition recording and reports in the hotel group.
*   More specialised to purchases regarding the entire group rather than a hotel.
*   Database for group recordings.
*   Data for individual hotel financial reports is gathered and processed in this system.

**Out of Scope**

Subsystem 1: Marketing

Functionality:

*   Marketing system determines funds needed for advertising.
*   Responsible for client communication for promotions.
*   Captures promotions created by marketing team and distributes to stakeholders.

Subsystem 2: Guest account management

Functionality:

*   Charges hotel services and additional client purchases to guest account.
*   Responsible for calculating client bill.

Subsystem 3: Planning & forecasting

Functionality:

*   Financial planning for the hotel group is done and recorded in this system.
*   Forecasting for future expenses and expected incomes done in this system.

Subsystem 4: Stock control and logistics

Functionality:

*   Stock purchases recorded in this system
*   Stock recording and keeping track of stock in storage done in this system
*   Deliveries and scheduling can also be done using stock control and logistics system.

Subsystem 5: Catering and function management

Functionality:

*   Scheduling of events to ensure there are no clashes in times are done on this system.
*   Food supplies for restaurant logged/recorded on this system.
*   Catering management orders food stock using this system.

Subsystem 6: IT

Functionality:

*   System updates and maintenance stored in the IT system.
*   Software package used implemented through IT system to manage business processes.

# ALTERNATIVE SOLUTIONS

## Solution 1

## Introduce a standardised reservation system.

This will involve merging guest ID cards and room access cards into the same card. The “chit” system will be completely integrated into this new card system, with the cards being used for these payments instead.

Guests will use one card for charges at the bar and/or entertainment. This can be developed by the hotel group’s IT support team as the process would be less strenuous on resources than if we were to buy a system. It is also a relatively straightforward project. This solution would be completed inhouse and can be integrated nearly immediately by swapping outdated guest cards with the new guest cards.

We will also introduce a unified reservation management software platform across the hotel group, based in the cloud. This will be a difficult task to complete inhouse as it requires specialist skills and databases to run and will most likely cost a lot. It would be much easier to subscribe to an existing package which comes with support, regular updates, and quicker setup. Most of the setup process and long-term support will be outsourced to the developer company. There will be a small amount of in-house input to sort out software requirements that are specific to the hotel group and through APIs our card will integrate with this new software platform. The reservation system should automate the allocation of rooms to a guest after a guest has chosen a room. These changes will be phased in hotel-by-hotel over a year.

## Solution 2

**Revamping of company HR**

The primary focus here is to introduce a group HR manager to approve of any hiring and firing of staff members after a complaint is raised by another member. This will be for any hotel part of the Phumla Kamnandi Hotel group. Managers should run transparent investigations as part of their firing process.

Additionally, Managers’ first task will be to lead the introduction of regularly scheduled training and skills development (three times a year). This will go beyond the vision/mission specifics staff are taught at training seminars. It will be regular and systems based to ensure efficiency, less wastage and lower costs. The HR manager must introduce a standard training curriculum which can be taught by hotel managers. This curriculum could be created in-house or follow existing hospitality courses. Hotel managers can augment, but not reduce the content, according to managerial understanding of the specifics of the individual hotel. Since the reservation software and accounting software is purchased, it will likely be better and cheaper to employ current existing courses for those aspects of the training. While, at the same time conducting in-house training on brand specific practices and processes.

Some of the training can be made available through videos, but for the most part it will not be automated and provided in person. Any employee should be able to easily transition from one hotel in the group to another. The HR manager should be appointed within a month and the training should start a month later, group wide.

## Solution 3

**Introduce a standardised accounting system**

Introduce a standardised accounting system across the group that is based in the cloud and syncs automatically. Since this is a skill-intensive and complex task it would be preferred to subscribe to an existing package that can manage it for us. This means we will benefit from continual support, updates, and setup. It would be a lot more costly to make a system and then continuously update and maintain it. The accounting process through the software will be largely automated as charges will be loaded automatically, the software will sync with the bank account and transactions will be automatically recorded. This should be phased in hotel-by-hotel over a year

## Comparison of solutions

All these alternative solutions seem reasonable in their scope and time frame. According to the financial report given by the business, 7% of revenue, which amounts to R49 000 000, a staggering amount of money, is lost due to mis-postings and write-offs on guest accounts. This obviously represents an easy opportunity to increase hotel revenue substantially. It would be best accomplished through a combination of alternative solutions 1 and 3, both of which can be feasibly implemented within a short time frame. Perhaps then it would be most wise to prioritize Solution 1 and 3 over Solution 2, which although effective in standardizing customer experience does not have as much of an immediate impact on the business’ revenue.

# RISK ASSESSMENT

The risk assessment for implementing our proposed changes to the Phumla Kamnandi Hotel Group can be seen in the following matrix:

**Risk**

**Probability**

**(0 – 10)**

**Impact**

**(0 – 10)**

**Factor**

**(0 – 100)**

**Mitigation Strategy**

Worsening of load shedding situation leads to an over reliance on generators to power the technology-based reservation system.

8

8

64

Maintain a non-electricity reliant, manual system which can still be used to keep track of proceedings in the hotel. Then when power returns the system can be updated accordingly.

This can also be avoided by sufficient investment in generators and independent power production solutions like solar panels.

Expected cost of implementation for the hardware exceeds our estimation for those costs.

6

5

30

Compare costs between potential suppliers.

Quality of software outsourced does not meet our requirements and provides less usage than expected.

3

5

15

Develop the outsourced software to adapt to the needs of the hotel group. Do research on the software and its capabilities before finalizing a deal with the supplier of the software. Investigating possible customization of the software according to the needs of the company.

Integration of the guest card system with the accounting system may take longer than expected or cost more than expected.

4

3

12

Phase in integration of the card system over a longer period instead of all at once so the business does not have to.

Loss of customers who preferred the old system and now find the current and new system difficult and dissatisfying to use.

3

3

9

The severity of this depends on how easy and satisfying the new system is to use. The more time spent finding and customizing the correct outsourced software package the less likely customers will be disappointed by the changes.

Cloud has all hotel data stored on it; data can be inaccessible if the supplier has issues.

1

9

9

A server situated at the head office backs up important data for the hotel group periodically.

# FEASIBILITY ASSESSMENT

**Cost-Benefit Analysis for One Year**

*   Total costs refer to the total costs for implementing a given solution for one year.
*   Mismanagement loss reduction refers to revenue that is currently lost as a result of an issue that the given solution will solve, thus resulting in that money not being lost.
*   Increased productivity is an estimate of the revenue effect of the solution via productivity, associated brand awareness and client retention.
*   All three solutions will make significant impacts on the business, with standardising the accounting system the most

**Solution 1**

Standardised Reservation System

**Solution 2**

Revamping of Company HR

**Solution 3**

Standardised Accounting System

**Total Costs**

*   R3 000 000

*   R2 000 000

\-R3 000 000

**Mismanagement Loss Reduction**

R500 000

R1 000 000

R20 000 000

**Increased Productivity**

R9 500 000

R 14 000 000

R4 000 000

**Net Expected Benefit**

R10 000 000

R15 000 000

R24 000 000

**Benefit-Cost Ratio (Rounded)**

4.3

8.5

9.0

**Technological Feasibility Issues**

*   The business will have to outsource the reservation management software because the hotel group does not possess the specialised skills to develop/create a standardised system for the whole group. This means that there will be less control and flexibility for managerial discretion in certain situations.
*   Some hotels may be affected by poor network connectivity and be unable to handle a fully cloud-based system. This may be due to location or current hardware. Alternative internet provider solutions will need to be examined in tandem with the rollout.
*   Since hotels have different hardware systems, some hotels will need to spend money on upgrading their hardware to run the new standardised software.

**Schedule Feasibility Issues**

*   Unforeseen bugs and errors would prevent the continuous roll-out of the system into more hotels, and certain hotels could be held back whilst others move on.
*   It will take a long time for all systems to be synced and come online which means that there will need to be continuous group-wide testing after the hotels all have the software which will add even more time to rollout.
*   Before the system can be phased out, one needs to be found. This could take quite a long time since the group will need to find the right system for their needs, budget etc.

**Organisational and Cultural Feasibility Issues**

*   For some hotels, the usual customers may prefer non-technological systems. They may be part of more traditional and conservative cultures and be annoyed by a new over-reliance on technology at hotels they once enjoyed. This could result in a loss of customers.
*   Some staff members may be resistant to changing a system they are used to; others might not be at the required level of computer literacy. These staff members will need to be assisted and trained to ensure they utilise the new system efficiently.
*   Automating large parts of the system may result in a change of jobs and alter managerial procedures. With outsourcing software, less IT workers are required which could also result in job loss.

**Resource Feasibility Issues**

*   There may not be enough time to teach employees how to use the system. Employees and managers may not have the time to teach or be taught the new system. People may just be too busy to enforce such big changes upon them. it could cripple the hotel if the employees do not know how to use the system upon which the hotel is based.
*   Related to time is the issue of human energy. Employees and managers may not have the motivation and/or discipline to learn a new system. They may already be too tired from their jobs and adding the extra stress of integrating new technology could be more difficult for the employees than expected.
*   Load shedding may cause issues in a technologically reliant system. Hotels without backup generators will be severely debilitated without electricity to power the new system.

**Economic Feasibility**

**Costs**

**Benefit**

**One-Time Costs**

**Tangible**

Software Installation.

Reduced loss of income, reduced errors.

Hardware Installation.

Better organisation of guest scheduling and booking.

Initial training of existing personnel.

More accurate capturing of data.

Developing new “chit” system with a unified card.

Lower costs of maintaining card supply

**Operational Costs**

**Intangible**

Cost of storing data on outsourced cloud.

Improved staff efficiency when conducting business practices.

Outsourced software’s yearly subscription.

External support provided by the supplier

Maintenance of guest card system.

System issues are solved more efficiently by the company we outsource to

Increased electricity bill because of the use of new technology.

Improved customer satisfaction.

# PROJECT SCHEDULE AND RESOURCES

Not applicable for this assignment.

# RECOMMENDATIONS TO MANAGEMENT

This investigation examined the business processes of the Phumla Kamnandi Hotel group to determine what processes, if any, could be automated and how costs could be brought down while optimising efficiency. As a result, the greatest opportunities to work towards the goal of business standardization have been outlined in this investigation. The current system has much room for improvement in terms of technological, HR and accounting solutions. All of these were found to currently rely heavily on labour-intensive, manual processes.

The three formulated solutions to these issues were implementing a standardised reservation system, revamping the group HR, and standardising the group accounting system. However, there are risks associated with these solutions, such as underestimates in the costs of implementation, the impact of load-shedding on a more technology-based business, and low-quality implementations which do not have the desired impact they were intended to. Of all of these, loadshedding posed the greatest risk with a risk factor of 64. The rest are considered low-risk with rick factors of 30 and lower.

Of the three solutions, it was found that the greatest focus should be placed on the introduction of the described accounting and reservation-system solutions. Collectively this will have a rapid, significant impact on reducing the current levels of lost revenue within the business with cost-benefit ratios of 4.3 and 9.0 respectively. Implementing these two solutions will cost around R6 000 000, with an expected aggregate cost-benefit of R34 000 000.

This large “recouperation” of revenue occurs since an effective implementation of these solutions could potentially reduce fraud, mis-postings, write-offs and misallocated guest charges by 90%. The ten percent that will still be present can be attributed to the largest identified risk factor: load shedding. This prevents the system from being active all the time, unless backup plans are made. Even with an effective implementation these problems cannot realistically be completely eradicated and so a variation of a few percent will be expected.

Moreover, these solutions will make the business more efficient, allow for staff to move seamlessly between hotels and enable a better experience for guests – which at the end of the day is the most important factor to help drive revenue!

Ideally, implantation of these solutions should begin as soon as possible and rolled out to all hotels within the group as per the specifications provided. The quicker the group makes the conversion, the better it will be for their financial, and sustainable, business future.

# Business Case Evaluation Form – Project Team #30

**STUDENT: Shaylin Velen**

**STUDENT: Michael Copeman**

**STUDENT: Alex White**

**STUDENT: Alex Christaudo**

**TOTAL MARK: %**

**1\. Presentation**

**Poor**

**OK**

**Good**

**Excel**

**Comment**

**Score**

Document Flow

**1**

**2**

**3**

**4**

Presentation of diagrams and tables

**1**

**2**

**3**

**4**

Spelling and Grammar

**1**

**2**

**3**

**4**

Overall Presentation,  
Typing and Layout

**1**

**2**

**3**

**4**

Ease of Information Absorption

**1**

**2**

**3**

**4**

**Out of 20**

**General Comments**

**2\. Content**

**Poor**

**OK**

**Good**

**Excel**

**Comment**

**Score**

Overview / Background

**1**

**2**

**3**

**4**

Problems, Opportunities

**3**

**6**

**9**

**12**

Objectives

**2**

**4**

**6**

**8**

Scope

**4**

**8**

**12**

**16**

Alternative Solutions

**3**

**6**

**9**

**12**

Risk Assessment

**2**

**4**

**6**

**8**

Feasibility

**4**

**8**

**12**

**16**

Recommendation

**1**

**2**

**3**

**4**

**Out of 80**

**General Comments**

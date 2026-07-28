---
title: INF2009F Workshop4 2023
type: lecture
status: needs-review
source: onedrive
assets: [INF2009F_Workshop4_2023.docx]
---
> [!warning]
> Converted from .docx with 5 warning(s) — check tables and equations. Original attached.

Systems Analysis and Design – INF2009F

Phumla Kamnandi Hotels Case Study – Workshop 4

Use Case Diagram and Use Case Scenarios (50 marks)

## Please enter the names of students in your workshop group into this table

**Student Name**

**Student Number**

**Project Group**

1.

2.

3.

4.

Management has given careful consideration to your recommendations on how to solve the current problems at Phumla Kamnandi Hotels. They have decided to continue with detailed analysis of the problem based on the following guidelines.

The overall development project will be split into three phases:

*   The first phase will focus on the development of a **_standalone computer system in each hotel to handle reservations and guest account management (billing)_**. This will include handling all guest charges and accounts but no corporate billing (facility to combine individual accounts for a single company) or debtors accounts. In addition, a third party organisation has been contracted to install point of sale (POS) devices in all hotel restaurants and bars. These terminals will transmit details of each purchase to the billing system in real-time mode. We are not providing web based functionality in this phase of the project
*   Phase two will introduce a central group system to handle centralised booking, corporate billing and marketing as well as a general ledger, human resources, debtors and stock control.
*   The final phase, which is only planned for 2024, will focus on decision support and function management.

**Your current responsibility is to develop phase one of the system.**

You have continued your detailed analysis of the systems at Phumla Kamnandi Hotels (see updated operating details below) and are now ready to start documenting your findings. The objective of today’s workshop is to document the system requirements (the functions the system must perform) by developing a use case diagram and use case narrative. Start by reading the detailed information about hotel operations provided below. We will then begin building the systems requirements documentation. **It is only important that you understand why and how to answer each question. Plan your time VERY carefully to be able to complete the activities during the specified time.**

# **Current Phumla Kamnandi Hotel Operations (detailed information for phase 1)**

## **Enquiries & Reservations**

Enquiries and reservations come via travel agents or individual customers, mostly by telephone. The enquiries are usually about rates, room availability and facilities. Some enquiries are dealt with by sending standard brochures, while others may involve looking up information (such as room availability) or producing a quotation.

Once the customer or travel agent decides to place a booking, the reservations clerk will need to identify the details about the person. This information will include name, address, phone and credit card number, as well as the number of rooms requested, the number of people expected, the start and end of the stay and any special requirements. The reservations clerk will check to see if there are rooms available for that period, and if they are, the reservation will be recorded. A booking reservation number is given to the person making the booking.

Actual room numbers are not allocated to a booking but are instead allocated each morning based on who will be leaving the hotel and who will be arriving that day. This room allocation process invariably drives the room servicing process. Priority should be given to servicing rooms where new guests are expected that day.

Cancellations and changes to bookings are also quite frequent.

Deposits are requested in order to secure a booking. On the day of reservation, a confirmation letter is emailed to the customer detailing the reservation details. Where the customer has not provided a credit card number, the letter requests a deposit amounting to 10% of the total room charge. If no deposit is received, the room can be allocated to another customer. Where a credit card is provided, the 10% deposit is withdrawn directly from the customer’s account. When the deposit is received it is recorded against the guest reservation. Where payment is refused by the credit card company, the problem is passed to the hotel accountant to follow up with the customer. All or part of a deposit will be retained if the booking is cancelled, depending on how late the cancellation occurs. Refunds can occur.

One major concern in the reservation system is that rooms can be booked as early as a year prior to the visit. Reception must keep an accurate picture of the number of actual rooms available on a particular date to ensure that all possible reservations are taken without over-booking the hotel. Some hotels still have manual registers and when these are not kept up-to-date, the result is loss of income and, often angry guests.

The hotel manager keeps an eye on future occupancy levels from information provided by a weekly occupancy report. Where it appears occupancy levels are too low, the manager can offer discounts or other specials (normally via the travel agencies and in the press) to improve occupancy over that period.

## **Room allocation**

Each night, expected departures and arrivals for the following day are assessed. Expected arrivals are allocated to whichever rooms are becoming available. A list is produced for housekeeping so that these rooms can be thoroughly serviced, well in time for the new guests. Part of this servicing includes the replenishment of the bar fridge early in the morning (in hotels that have them) and informing reception of consumption so that this can be added to the guests bill.

A list of expected departures is also produced, so that reception can ensure that accounts are as up to date as possible, and ready for check-out.

## **Check in process**

The check-in process is simple. Guests arrive, fill out registration forms, and where relevant, provide their credit cards for swiping. They are given their room key, and a guest card on which is written or printed their name, room number and duration of stay. They must sign this at reception. The card can be used to purchase meals, drinks and hotel services, all of which can be charged to the room account.

## **Room servicing**

Room servicing is done based on a prioritised list prepared the evening before. Room servicing involves the usual cleaning and tidying. Complementary tea, coffee and soaps are replenished, new towels are provided daily. Bed linen is changed weekly, for a new guest, or if it is damaged or soiled. The bar fridge is restocked by bar staff, and the bar consumption form is completed and forwarded to reception. Guest laundry is collected at 9 a.m. and returned by 5.00 p.m.

## **Accounts processing**

Accounts processing is the single biggest headache for hotels, and the area for potentially huge financial losses. It is also an area for really significant improvements.

Separate accounts are kept for each room in the hotel, and are 'open' from check-in time to check-out time, when their status changes to 'closed' (meaning that no charges can be incurred by the guest against that account) and finally 'settled', once the account is eventually paid.

Guests may choose to charge any hotel service or purchase to their room account. This would include services like bar and restaurant purchases, telephone charges, laundry, room service, housekeeping or babysitting. Except in the case of room charges and telephone charges (which are recorded automatically by the hotel PABX), all charges are authorised by the guest on production of a valid guest card, and by signing the voucher for the service.

All charges are charged to the room itself, even where there are, for example, two conference attendees rooming together. They have to divide the room bill themselves if they want to split the costs. It is common that a family or group will thus receive several room accounts, and pay for these accounts in one go.

In most cases, accounts are updated at night, but ideally this should be real-time. Including breakfast as part of the tariff has done a lot to prevent missing these charges at check out time, but there is still the problem of ensuring that late bar, meal, room service, housekeeping and other charges are included on the bill.

Charges emanate from what are called 'cost-centres' (by the accountant) or 'service points' (bars, restaurants, laundry, room service, housekeeping). In most cases, charges consist of paper vouchers or 'chits' that are forwarded to accounts processing each night and each morning, for recording to an account. Unfortunately the chit system has high potential for unintentional error and fraud. The documents are often difficult to read and on occasions are “doctored” by unethical members of staff. Nearly all charges work through the 'chit' system, although some specific charges are handled as follows:

*   **Room tariffs**: Each day the tariff for accommodation is entered onto every account. Discounts, promotions and prepayments (deposits) are recorded on the account as they occur.
*   **Phone bills**: All hotels have a PABX installed. These have the capability to record calls summarised by extension (room number). Reception can print a call summary sheet at any time for guests so they can check on call costs. A final summary is produced at checkout, the total added to the account, and the summary stapled to the account as proof.

## **Debtors (only in phase 2 of the project)**

Although most room accounts are settled at checkout time, about 10% of room accounts need to be forwarded to travel agents or companies for payment. Details of these accounts are transferred to the debtors system. Monthly statements are sent as reminders and bad debts are followed up.

## **Banking**

Each service point that takes cash is required to cash up at the end of the day, and forward the takings and the batch totals to the accountant. Reception does the same.

Total takings for the day are tallied and cross checked to till slips or receipt books. A deposit slip is produced and the takings placed in the safe overnight. Deposits are made each morning.

**Question 1 –** Identify all the Actors and Base Use Cases in the System under Discussion (20 Minutes) \[**12 Marks\]**

Populate the matrix below with all the actors and “base” use cases you would include in the Phumla Kamnandi Hotels Reservations and Billing System. Remember:

*   **Actors:** are roles played by users of the system (remember this is always the user of the system and not the source of the data). If a customer can withdraw money from a bank (via an ATM) or approach a bank teller in the branch, both the customer and the bank teller would be actors in the “Make a Bank Withdrawal” use case. Remember we are not providing web based functionality in this phase of the project.
*   **Use Cases:** uses (_elementary business processes_) of the system. Ensure that each use case is a single task (could take more than one consecutive actions to complete) and not multiple tasks (clouds) or only part of a task (fish).

**Actor**

**Use Case**

**Question 2 –** Draw a Use Case Diagram to document the functional to be included in the Phumla Kamnandi **Hotels Reservations** and **Billing System**. (40 minutes) \[**20 Marks\]**

**The diagram should contain:**

*   **Primary Actors:** actors initiating the task (normally shown on the left of the diagram).
*   **Secondary Actors:** actors providing support in the execution of the use case (normally shown on the right of the diagram.
*   **Associations:** showing which actors participate in which use cases.
*   **Automation boundary:** rectangular line around the use cases depicting the boundary between the environment where the actors reside and the internal functions of the automated system. You may want to use this boundary to indicate subsystems.
*   **Subroutines and their Dependencies:** where common activities exist across a number of use cases, the activities can be represented as separate use cases and their use by other use cases can be documented by <<include>> or <<extend>> dependencies.

Question 2: Use Case Diagram of Phumla Kamnandi Hotels Reservations and Billing System

### Question 3: Use Case Description (45 Minutes) \[18 Marks\]

The Use Case diagram you have just completed provides a very high level and easy to understand description of the functions performed by the Phumla Kamnandi Hotels Reservations and Billing system. However, in analysing these functions, you will have gained a more detailed understanding of the tasks that make up each business function. Rather than lose this important information about the system, you can document the detail using a use case narrative or scenario – basically a more detailed description of the inner workings of each use case.

Using the following template to assist you, develop a use case narrative for the Make a Booking use case.

In terms of the exceptional and alternatives courses of events, brainstorm a list of at least 10 instances **_and then_** write up four of these in your use case narrative.

**Expanded Use case:**

# **ID:**

# **Level:**

**Actors:**

**Stakeholders and Interests**

**Brief Description:**

**Preconditions:**

**Post conditions:**

**Related Use Cases**

### Typical Course of Events

**Actor Action**

# **System Response**

### Exception / Alternative Course of Events

**Actor Action**

# **System Response**

**List of 10 Exceptions or Alternatives to the Typical Course of Events**

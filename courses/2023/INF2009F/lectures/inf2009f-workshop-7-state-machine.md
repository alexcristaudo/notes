---
title: INF2009F Workshop 7 - State Machine
type: lecture
status: needs-review
source: onedrive
assets: [INF2009F_Workshop-7---State-Machine.docx]
---
> [!warning]
> Converted from .docx with 3 warning(s) — check tables and equations. Original attached.

Systems Analysis and Design – INF2009F

Phumla Kamnandi Hotels Case Study – Workshop 7

State Machine Diagrams (25 Marks)

## Please enter the names of students in your workshop group into this table

**Student Name**

**Student Number**

**Project Group**

1.

2.

3.

4.

**State Machine Diagrams**

The last stage in the analysis of user requirements at Phumla Kamnandi Hotels is the development of State Machine diagrams depicting the internal behaviour of complex classes in the system.

Object interaction diagrams (such as the Sequence diagram) document the external view of object behaviour and the messages they send and receive in their life time. Remember there could be one State Machine diagram for each class in the system (although we only tend to model classes that have complex behaviour). The purpose of the State Machine diagram is to describe the internal behaviour of each object. To do this in the **design** phase, the analyst can review the completed interaction diagrams for all use cases to understand how the object behaves during its lifetime.

However the State Machine is also very useful in providing an “**analysis**” view of the behaviour of a “business” object. Much in the same way as a domain class diagram is used to identify business concepts and their constraints, so state machines can be used to model the behaviour of a concept and all the business rules and behaviour it has over the various stages (states) of its existence.

**Question 1: State Machine Diagram – Phumla Kamnandi Hotels Guest Account Class**

Build a State Machine diagram by following these steps:

1.  Brainstorm a list of states for the object you are analysing. Try following the lifecycle of the object from its creation to it becoming dormant or deleted from the system.
2.  Draw a draft State Machine diagram showing states and transitions.
3.  For the purpose of this question you can simply mark the transitions with message events rather than full transition labels as you are not working from the detailed messages recorded in the sequence diagrams.
4.  You have a rough idea of the behaviour of the Guest Account Class from previous documentation and questions. However you have been given specific information about the class in the list of business rules below. Build your State Machine diagram based on these rules (you can ask the Hotel manager (_tutor acting as hotel manager – during the workshop session_), should you need further clarity 😊).

**Hotel Guest Account Class**

*   A guest makes a booking and should pay a deposit at least 10 days before arrival. We only follow up on guests who have not paid their deposits if the hotel is full and we can allocate their room to someone else.
*   A guest can cancel booking 10 days before arrival and then the account is cancelled.
*   Once a guest is checked in to the hotel, the guest can start charging hotel expenses to their account (bar, room service restaurant, telephone etc).
*   A guest can make payments to account during stay (does not want to carry too much cash around in case they get mugged).
*   A guest checks out of the hotel and is given copy of their account.
*   A guest can pay account on departure or on statement (account is transferred to the debtors system for actioning--).
*   After one year all closed accounts or those that have not been re-used in the system transactions are archived

**Task 1: State Machine Diagram for the Phumla Kamnandi Hotels Guest Account Class**

**Task 2: Provide a succinct narrative for the State Machine Diagram you created for the Phumla Kamnandi Hotels Guest Account Class**

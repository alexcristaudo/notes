---
title: INF2009F Workshop6 2023
type: lecture
status: needs-review
source: onedrive
assets: [INF2009F_Workshop6_2023.docx]
---
> [!warning]
> Converted from .docx with 3 warning(s) — check tables and equations. Original attached.

Systems Analysis and Design – INF2009F

Phumla Kamnandi Hotels Case Study – Workshop 6

Sequence Diagrams (80 marks)

## Please enter the names of students in your workshop group into this table

**Student Name**

**Student Number**

**Project Group**

1.

2.

3.

4.

In previous workshops you have completed the following tasks:

*   Analysis of the current problems at Phumla Kamnandi Hotels. From your findings you developed a **_BUSINESS CASE_** with recommendations to management as where to go from here.
*   Construction of a **_USE CASE DIAGRAM_** together with detailed scenarios to depict the main use cases in the reservation and billing system.
*   Built up a **_DOMAIN CLASS DIAGRAM_** identifying the noteworthy concepts in the reservation and billing system and documenting these entity classes, their attributes and associations. This diagram was then refined to become an **_ANALYSIS CLASS DIAGRAM_** representing the software classes required by the system. The final step in the process was a walkthrough where user requirements (taken from the relevant use case narratives) were used to test whether these classes, attributes and associations were able to accommodate all the users’ requirements.

**Use Case Realisation using Sequence Diagrams**

We have completed our Use Case and Class Diagram for the Phumla Kamnandi Hotels Reservation and Billing System and are now ready to draw a SEQUENCE DIAGRAM to model how the various objects in the system interact to perform a particular use case. Let’s start by reviewing the steps in developing a sequence diagram:

1.  A sequence diagram represents the interaction between objects in a single use case. A detailed description of this interaction is best found in the use case narrative flow of events. A sample flow of events for the “Make a Guest Reservation” use case is given below although you may use your own if you prefer.
2.  Identify all the actors and objects involved in the use case. The Use Case diagram and Class diagram will help you here.
3.  Based on the flow of events, identify each message that will be required to carry out the scenario. Identify both the source object or actor for each message and the destination object or actor. A few rules will help you here:

*   Objects manage their own attributes – so if you want to check when a guest is arriving, you need to know where that information resides (reservation object) and send a message to that object.
*   Where you have a “whole-part” relationship – for example orders have line items and accounts have payments, the messages normally go to the class representing the whole and it will collaborate with its parts. This will ensure that the “whole” is aware about the behaviour of its “parts”.

1.  Some messages are conditional (only sent under certain conditions). For example you would only send a message to create a new guest if that guest is not already in the system. Guard conditions on messages can control when they are triggered.
2.  Build your sequence diagram up from the messages originating from the primary actor. You can add objects, messages and secondary actors as you progress. Work in rough as you will make changes frequently as you understand how to use this modelling technique. You can work with high level message names (names and guard conditions and ignore return-values and message parameters) for this Question.

Below is an example of the typical courses of events for the “Make a Guest Reservation” use case scenario for your information – you may have identified additional activities or a different sequence of actions. Remember you are modelling the “happy day” scenario.

**Actor**

**System**

1.  _Customer contacts hotel and asks to make a reservation_

1.  _Receptionist enters reservation details into the system_

1.  _Checks room availability and room price and displays details on screen_

1.  _If accommodation not available, ask for new dates and return to 2 above._

1.  _Customer confirms reservation to be made_

1.  _Receptionist enters new or existing guest details_

1.  _Verifies existing guest or adds new guest_

1.  _Receptionist indicates reservation should be made_

1.  _System creates reservation and guest account. System calculates deposit amount and generates reservation reference number._

1.  _Receptionist enters guest deposit payment details_

1.  _System verifies payment with credit card company. System records payment and adjusts guest account to record deposit._

1.  _Receptionist confirms that reservation is complete and advises guest of reservation reference number._

1.  _System generates confirmation letter to be emailed, faxed or posted to guest._

**Question 1 – Systems Sequence Diagram (30 marks)**

In the analysis phase you are more likely to model message passing at the user interface and leave the modelling of the internal collaboration of objects until detailed design. Draw a **Systems Sequence diagram** to model the use case “**Make a Guest Reservation**”. Use the UML 2.0 notation with frames and reflective messages to show systems activity. Also assume there will be a boundary and control object in the interaction (inside the <<System>> object. This diagram will work best in “portrait mode”.

**Question 2 – Sequence Diagram (40 marks)**

Draw a **Sequence Diagram** to model the use case “**Make a Guest Reservation**”. In this question you will also include the domain objects that play a role in the process. Your diagram might work best in “landscape mode”. For the purposes of this question you should not include any boundary or control objects.

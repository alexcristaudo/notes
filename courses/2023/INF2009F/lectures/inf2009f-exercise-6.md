---
title: INF2009F Exercise 6
type: lecture
status: needs-review
source: onedrive
assets: [INF2009F_Exercise-6.docx]
---
> [!warning]
> Converted from .docx with 1 warning(s) — check tables and equations. Original attached.

**INF2009F – 2023 Use Case Narrative**

**Exercise 6 (15 Marks)**

**Student Name: Alex Cristaudo**

**Student Number: CRSALE010**

**IMPORTANT NOTE:**

*   **Copied or Plagiarised answers will get 0 and student will be referred to Elsje Scott or Ayanda Pekane for further action.**
*   **Please upload your completed exercise on Vula by the 3rd of April 2023 at 9am**

Please revisit the Khwela Womxn Case Study to remind you of the background and the current processes involved.

Develop a use case narrative for the ‘**accept member’ in Circle use case** and the ‘**allocate member’ to Circle use case**. The ‘accept member’ in Circle use case is where the moderator needs to check the space available and obtain the approval of existing members. The ‘allocate member’ to Circle use case is where a team member allocates the new Circle member to a Circle.

**Use Case**

**Accept Members in Circle**

**ID: 0001**

**Level: High**

**Actors**

1.  New Women looking to join
2.  Team Member
3.  Airtable (as a secondary actor)

**Stakeholders + Interests**

1.  Management – they will want to see new members, what procedures are used for accepting members and how many members they accept
2.  Advertising Department – they will want to know how the new members found out about Khwela Womxn to improve their advertising

**Brief Description**

A new woman will find out about Khwela Womxn will sign up online. A team member stores the information of the new member into the Airtable database and checks availability of the circle associated with the new member. If the circle has positions available, they request approval for the new member to join the circle. If that is approved, the allocate member to circle use case is initiated. If there is no space, the new member is added to a waiting list

**Preconditions**

Data is successfully inserted into Airtable database after a woman signs up

The new woman is old enough to sign up

The data entered by the woman is valid

The team member has received the application to join

**Post conditions**

The woman is either added to a waiting list, denied or the ‘allocate member’ use case is invoked

**Related Use Cases**

The system <<include: check Circle Availability>> and << extend: ‘Allocate member’>> and <<extend: add to waiting list>>

**Typical Course of Events**

**Actor Action**

**System Response**

A new woman signs up online

The system takes the information entered by the woman and inserts their data into the Airtable database. The system will also create an application for this woman and store this for the team members to use and review

A team member retrieves new applications

The system will display all new applications for new women for the circle member to review

A team member checks a circles availability

The system will display all available circles (that are not full)

A team member requests permission to join a group

The system sends a permission request to the relevant circle for circle for the members to approve or deny

Circle members approve the joining of the new member

The system uses the ‘allocate member’ use case to add the member to the circle

**Alternative Course of Events**

**Actor Action**

**System Response**

A team member finds no available circles

The system adds the new member is added to a waiting list for a specific circle(s)

Circle members deny the new member

They are not added to the circle and the reasoning is emailed to the team member responsible for the request for reviewal

**Use Case**

**Allocate Member to Circle**

**ID: 0002**

**Level: High**

**Actors**

Circle moderator

New woman looking to join

Existing team members

Airtable database (as a secondary actor)

**Stakeholders + Interests**

1.  Management – they are interested on who joined what circle on what date for performance evaluation. Also allows for checking effectiveness of certain circles
2.  Advertising – they can find out who joined on what day and interview new Khwela Womxn should they want to do the interview

**Brief Description**

A new woman gets added their circle by a team member. The circle moderator then adds them to their WhatsApp group and stores the date they want to join the circle

**Preconditions**

The new member has been approved

There is space in the group

New member has registered and is part of the Airtable database

**Post conditions**

New member has been allocated to the group

New member has been added to their WhatsApp group

A date has been allocated to that member

**Related Use Cases**

The system <<include: update circle to reflect new member>> and <<include: add date to member>> for an event

**Typical Course of Events**

**Actor Action**

**System Response**

A team member adds the new member to a circle

The system updates the database to reflect that the new woman is part of their respective group

A team member enters the date the new woman wants to join

The system stores this date for that event to record attendance

**Alternative Course of Events**

**Actor Action**

**System Response**

The new woman is not sure of what date they will join

The system will mark their date as NULL and send an email to the user to give their date when they can. Reminder emails will follow should no response be given

The new woman does not want to join meetings and rather just wants access to content provided

The system will mark their date as N/A and send an automated email to the user stating that should they want to join in the future, they should email back to a selected email

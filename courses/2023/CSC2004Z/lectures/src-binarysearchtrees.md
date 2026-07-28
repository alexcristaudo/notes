---
title: Src BinarySearchTrees
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-BinarySearchTrees.tex]
---
> [!warning]
> Compiled from **src-BinarySearchTrees.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \lstinputlisting, \small, \color, \newline
> The original .tex is attached above.

pdf{assets/BSTTitle.pdf}

## Object Oriented Design

The classes involved include:

- **BST**. This class uses generics to create binary search trees that store the specified object type as the data in the nodes of the tree. This class is also used to perform operations on that binary search tree, such as insertions, deletions, retrieval of all the data in the tree, changing the value of a key in the tree and finding a node with a specified value in the tree
- **Node**. This is an inner class  of the BST class and is used to represent the nodes stored in the binary search tree. The class is used to store a generic data item and a link to the left and right nodes from that node. 2 nodes can be compared using the Node class, and the data in the node can be retrieved
- **Video**. This class represents a video the user can create to store the 'file name', 'description' and the 'number of likes' that video has in one object. The class can also be used to retrieve or do operations on these attributes
- **Profile**. This class represents a Profile object, storing the 'account name', 'description', 'their created videos', 'the other profiles they follow' and 'the videos they like'. This class is also used to perform operations on these attributes and retrieve them.
- **TokTik**. This class has the main method to run the user interface and create the objects to make the application work. The class displays TokTik to the user and is also used to validate data inputted by the user.

These classes interact with the other classes as follows:

- **BST** uses **Node** as its head node and any data insertion creates a node object. Node objects are also used to find data, delete data and get all the data in the tree
- **Node** uses **Node** to store links to the left and right nodes and compare 2 different node objects
- **Video** uses **Video** to compare 2 different video objects
- **Profile** uses **Profile** to store a list of profiles that profile follows. Profile objects are also used to compare 2 profiles, unfollow and follow a profile, get a profiles followers (which also uses **BST** of profiles), and create a new profile off of an old profile with a new username
- **Profile** uses **Video** to store video objects for the videos that profile has created. The videos are stored using **BST**, by creating a tree object storing video objects
- **Profile** also uses **Video** in a List to store the liked video. Video objects are also used to like a video, add a video to the BST of videos and display content about a video of a profile
- **TokTik** uses **Profile** and **BST** to create a binary tree of with profile objects as the data in each node. **TokTik** therefore uses **Profile** to create profile objects and **Video** to create video objects.
- **TokTik** uses  **Node** during validation to check if a found Node object is part of its associated tree (the tree could be the tree of profiles, or tree of videos for a profile).

## Test Values

### Text Files

The following 2 files are used during testing:

*dataset1.txt*

\lstinputlisting{assets/dataset1.txt}

*dataset2.txt*

\lstinputlisting{assets/dataset2.txt}

### Testing

Initially, the user is given the following prompt:

\small {
\color{gray}
\begin{BVerbatim}
WELCOME TO TOKTIK
===============================
Choose an action from the menu:
===============================

1. Find the profile description for a given account
2. List all accounts
3. Create an account
4. Delete an account
5. Display all posts for a single account
6. Add a new post for an account
7. Load a file of actions from disk and process this
8. Sign into an account
9. Quit

Enter your choice:

\end{BVerbatim}
}
 \color{black}

 After each function is run, the same menu is printed again. Each choice corresponds to a function the program runs and testing will be done on the base 7 functions (1-7) by showing the output the program runs for the inputted data: \newline

1. {**Find the profile description for a given account:**
Starting with the data in *dataset1.txt*:      \begin{enumerate}
2. Account is in the tree:              \small { \color{gray} \begin{BVerbatim} Enter your choice: 1 Enter the account name: UlicQel-Droma6 UlicQel-Droma6s description: broccoli's werewolf's gonads \end{BVerbatim}  }  \color{black}
3. Item is not in the tree:              \small { \color{gray} \begin{BVerbatim} Enter your choice: 1 Enter the account name: Greedo9 There is no account with username 'Greedo9' \end{BVerbatim}  }  \color{black}

}

 **List all accounts:**

1. Starting with the data in *dataset1.txt*:               \small { \color{gray} \begin{BVerbatim} Enter your choice: 2 USERNAME: Greedo8 DESCRIPTION: Kishinev drip's transcendentally --------------------------------------------- USERNAME: GeneralVeers3 DESCRIPTION: Coulter's immaculately mill ---------------------------------------- USERNAME: KyleKatarn2 DESCRIPTION: amicability's aquariums baseboard ---------------------------------------------- USERNAME: UlicQel-Droma6 DESCRIPTION: broccoli's werewolf's gonads ----------------------------------------- USERNAME: MaraJade7 DESCRIPTION: stud's nationalization's foxgloves ----------------------------------------------- \end{BVerbatim}  }  \color{black}
2. Starting with an empty BST:              \small { \color{gray} \begin{BVerbatim} Enter your choice: 2 No accounts \end{BVerbatim}  }  \color{black}

 **Create an account: **

1. Creating an account with a blank username (The [ ] brackets show the input and are not shown in the program):          \small { \color{gray} \begin{BVerbatim} Enter your choice: 3 Enter account name: [] The account name '' cannot be empty \end{BVerbatim}  }  \color{black}
2. Creating a username with a space :          \small{ \color{gray} \begin{BVerbatim} Enter account name: Alex Cristaudo The account name 'Alex Cristaudo' cannot have a space \end{BVerbatim} }  \color{black}
3. A valid username but blank description (The [ ] brackets show the input and are not shown in the program):          \small{ \color{gray} \begin{BVerbatim} Enter account name: alexcristaudo Enter the account description: [] The description '' cannot be blank \end{BVerbatim}  }  \color{black}
4. Creating a description that is only spaces (The [ ] brackets show the input and are not shown in the program):          \color{gray} \small{ \begin{BVerbatim}      Enter the account description: [   ] The description '   ' cannot be only spaces \end{BVerbatim} }  \color{black}
5. A valid description is entered:          \small{ \color{gray} \begin{BVerbatim} Enter the account description: My account Account 'alexcristaudo' with description 'My account' has succesfully been created \end{BVerbatim}  }  \color{black}
6. [] Should you try to view the accounts, the following is displayed (starting from an empty BST):      \small{ \color{gray} \begin{BVerbatim} Enter your choice: 2 USERNAME: alexcristaudo DESCRIPTION: My account ---------------------- \end{BVerbatim}  }   \color{black}
7. [] Should we have started with the data in *dataset1.txt* and use 'alexcristaudo' as the username and 'My account' as the description. The list of accounts would be (running function 2):  \small{ \color{gray} \begin{BVerbatim} USERNAME: Greedo8 DESCRIPTION: Kishinev drip's transcendentally --------------------------------------------- USERNAME: GeneralVeers3 DESCRIPTION: Coulter's immaculately mill ---------------------------------------- USERNAME: KyleKatarn2 DESCRIPTION: amicability's aquariums baseboard ---------------------------------------------- USERNAME: UlicQel-Droma6 DESCRIPTION: broccoli's werewolf's gonads ----------------------------------------- USERNAME: MaraJade7 DESCRIPTION: stud's nationalization's foxgloves ----------------------------------------------- USERNAME: alexcristaudo DESCRIPTION: My account ----------------------- \end{BVerbatim}  }   \color{black}

 **Delete an account**. Starting with the data in *dataset1.txt*:

1. Valid Item in the Tree:           \color{gray} \small{ \begin{BVerbatim} Enter your choice: 4 Enter account name: KyleKatarn2 'KyleKatarn2' has successfully been deleted \end{BVerbatim}   \begin{BVerbatim} =============================== Choose an action from the menu: =============================== 1. Find the profile description for a given account 2. List all accounts 3. Create an account 4. Delete an account 5. Display all posts for a single account 6. Add a new post for an account 7. Load a file of actions from disk and process this 8. Sign into an account 9. Quit Enter your choice: 2 USERNAME: Greedo8 DESCRIPTION: Kishinev drip's transcendentally --------------------------------------------- USERNAME: GeneralVeers3 DESCRIPTION: Coulter's immaculately mill ---------------------------------------- USERNAME: UlicQel-Droma6 DESCRIPTION: broccoli's werewolf's gonads ----------------------------------------- USERNAME: MaraJade7 DESCRIPTION: stud's nationalization's foxgloves ----------------------------------------------- \end{BVerbatim} }  \color{black} We see that after showing all accounts, 'KyleKatarn2' has been deleted
2. Item is not in the Tree:          \color{gray} \small{ \begin{BVerbatim} Enter your choice: 4 Enter account name: Greedo10 'Greedo10' does not exist \end{BVerbatim} }  \color{black}

 **Display all posts for a single account**. Starting with the data in *dataset1.txt*:

1. Account is in the tree and has posts:          \small { \color{gray}         \begin{BVerbatim}  Enter your choice: 5 Enter account name: Greedo8 'bacterium Roger's cane overspecializing Serrano's' has 7147 likes 'Brewster's aggregating biologist miniaturization' has 7345 likes 'plains flora's continuance rejoin takeoff's' has 2438 likes         \end{BVerbatim}          }  \color{black}
2. Account is in the tree but has no posts:          \small { \color{gray}         \begin{BVerbatim}  Enter your choice: 5 Enter account name: UlicQel-Droma6 User 'UlicQel-Droma6' has no videos         \end{BVerbatim}          }  \color{black}
3. Account is not in the tree:          \small { \color{gray}         \begin{BVerbatim}  Enter your choice: 5 Enter account name: Greedo10 User 'Greedo10' does not exist         \end{BVerbatim}          }  \color{black}

 **Add a new post for an account**. Starting with the data in *dataset1.txt*:

1. Adding to a user with existing videos:      \small { \color{gray} \begin{BVerbatim}  Enter your choice: 6 Enter account name: Greedo8 Enter file name: video1000.mpg Enter number of likes: 1000 Enter the video description: I am back Video 'I am back' from 'video1000.mpg' was successfully added to user 'Greedo8' \end{BVerbatim}  }  \color{black} Choosing option 5 yields:   \small{ \color{gray} \begin{BVerbatim}  Enter account name: Greedo8 'bacterium Roger's cane overspecializing Serrano's' has 7147 likes 'I am back' has 1000 likes 'Brewster's aggregating biologist miniaturization' has 7345 likes 'plains flora's continuance rejoin takeoff's' has 2438 likes \end{BVerbatim}  }  \color{black}
2. Adding to a user with no videos:      \small { \color{gray} \begin{BVerbatim}  Enter your choice: 6 Enter account name: GeneralVeers3 Enter file name: video1001.mpg Enter number of likes: 10 Enter the video description: My first video  Video 'My first video' from 'video1001.mpg' was successfully added to user 'GeneralVeers3' \end{BVerbatim}  }  \color{black} Choosing option 5 yields:   \small{ \color{gray} \begin{BVerbatim}  Enter account name: GeneralVeers3 'My first video' has 10 likes \end{BVerbatim}  }  \color{black}
3. Attempting to add to a user that does not exist:      \small { \color{gray} \begin{BVerbatim}  Enter your choice: 6 Enter account name: Greedo10 User 'Greedo10' does not exist \end{BVerbatim}  }  \color{black}
4. Attempting to add an invalid file:  \small { \color{gray} \begin{BVerbatim}  Enter your choice: 6 Enter account name: MaraJade7 Enter file name: video4820.mpg The file name 'video4820.mpg' already exists Enter account name: MaraJade7 Enter file name: file 1.mpg The file name 'file 1.mpg' cannot have a space Enter account name: MaraJade7 Enter file name:  The file name '' cannot be empty \end{BVerbatim}  }  \color{black}
5. Attempting to add an invalid number of likes  \small { \color{gray} \begin{BVerbatim}  Enter account name: MaraJade7 Enter file name: video1000.mpg Enter number of likes: Yes Enter a valid number. 'Yes' contains non-numeric characters or is blank Enter account name: MaraJade7 Enter file name: video1000.mpg Enter number of likes:  Enter a valid number. '' contains non-numeric characters or is blank \end{BVerbatim}  }  \color{black}
6. Attempting to add an invalid description  \small { \color{gray} \begin{BVerbatim}  Enter account name: MaraJade7 Enter file name: video1000.mpg Enter number of likes: 10 Enter the video description:  The description '' cannot be blank Enter account name: MaraJade7 Enter file name: video1000.mpg Enter number of likes: 10 Enter the video description:     The description '   ' cannot be only spaces \end{BVerbatim}  }  \color{black}

 **Load a file of actions from disk and process this**.

1. Starting with an empty BST:  \small { \color{gray} \begin{BVerbatim}  Enter your choice: 7 Enter the file name: dataset1.txt File 'dataset1.txt' was successfully loaded \end{BVerbatim}  }  \color{black} Choosing (2) shows all the accounts have been created:  \small { \color{gray} \begin{BVerbatim} USERNAME: Greedo8 DESCRIPTION: Kishinev drip's transcendentally --------------------------------------------- USERNAME: GeneralVeers3 DESCRIPTION: Coulter's immaculately mill ---------------------------------------- USERNAME: KyleKatarn2 DESCRIPTION: amicability's aquariums baseboard ---------------------------------------------- USERNAME: UlicQel-Droma6 DESCRIPTION: broccoli's werewolf's gonads ----------------------------------------- USERNAME: MaraJade7 DESCRIPTION: stud's nationalization's foxgloves ----------------------------------------------- \end{BVerbatim} }  \color{black} Choosing (5) for some random profile shows the videos have been added:  \small { \color{gray} \begin{BVerbatim} Enter account name: Greedo8 'bacterium Roger's cane overspecializing Serrano's' has 7147 likes 'Brewster's aggregating biologist miniaturization' has 7345 likes 'plains flora's continuance rejoin takeoff's' has 2438 likes     \end{BVerbatim}  }  \color{black}
2. Starting with a BST with objects in it. Suppose *dataset1.txt* has been loaded.  \small { \color{gray} \begin{BVerbatim}  Enter your choice: 7 Enter the file name: dataset2.txt File 'dataset2.txt' was successfully loaded \end{BVerbatim}  }  \color{black} Choosing (2) shows all the accounts have been created:  \small { \color{gray} \begin{BVerbatim} USERNAME: Greedo8 DESCRIPTION: Kishinev drip's transcendentally --------------------------------------------- USERNAME: GeneralVeers3 DESCRIPTION: Coulter's immaculately mill ---------------------------------------- USERNAME: BibFortuna7 DESCRIPTION: befits Firebase's should ------------------------------------- USERNAME: KyleKatarn2 DESCRIPTION: amicability's aquariums baseboard ---------------------------------------------- USERNAME: UlicQel-Droma6 DESCRIPTION: broccoli's werewolf's gonads ----------------------------------------- USERNAME: MaraJade7 DESCRIPTION: stud's nationalization's foxgloves ----------------------------------------------- USERNAME: PROXY8 DESCRIPTION: demonstratives Lollobrigida SC's --------------------------------------------- USERNAME: PreVizsla8 DESCRIPTION: Loren scuffled equivalent's ---------------------------------------- \end{BVerbatim} }  \color{black} Choosing (5) for some random profile shows the videos have been added:  \small { \color{gray} \begin{BVerbatim} Enter account name: UlicQel-Droma6 'furtiveness lurch Verdun rangier Wei's' has 3447 likes 'crier's Tijuana's florid senselessness's betray' has 9406 likes \end{BVerbatim}  }  \color{black}
3. Entering an invalid file path:  \small { \color{gray} \begin{BVerbatim}  Enter your choice: 7 Enter the file name: dataset3.txt File not found: 'dataset3.txt' \end{BVerbatim}  }  \color{black}

\end{enumerate}

## Additional Features

The following features relating to the program as a whole have been implemented:

1. Data is validated before accepted. The implemented criteria is:      - A username/file name must be unique - A username/file name cannot contain any spaces - A username/file name cannot be empty - A description cannot be empty - A description cannot be made of only spaces - The number of likes must be an integer - When a list of options is provided, the integer entered must be a valid option for that given list

User-specific features have also been implemented. First, a user can sign into their profile, and after that, they can do one of the following:

1. A user can now follow another user and view the users they follow
2. A user can unfollow a followed user
3. A user can browse content: A user can either be in 'for you' mode, which when selected, displays a random video from any other profile to the user, or the user can be in 'following' mode to view content only from users that they have followed. This takes a random video from the following users and displays that video
4. When content is displayed, the option to like the video comes up and should the user like the video, the likes on that video increase and that video is stored in a list of liked videos
5. The user can update their user settings:          - They can change their username (this is validated and must not be taken) - They can change their description (this is validated)
6. The user can get a list of their followers (the users who follow them)
7. A user can get a list of liked videos
8. A user can get a list of their own videos

## Git

The first 10 and last 10 lines are (with last 10 shown first, then first 10):

0: commit 6b1c419c3661be694bfc4f56f25fc62facb2e76b
1: Author: alexcristaudo $<$alexcristaudo1@gmail.com$>$
2: Date:   Sat Apr 15 15:48:20 2023 +0200
3:
4: Fix an exception when the user tries to display content and do not follow a user or their followed users have no videos made, javadocs added
5:
6: commit fbd89c033d31b0603c38efb9ea65f71052eb27ee
7: Author: alexcristaudo $<$alexcristaudo1@gmail.com$>$
8: Date:   Fri Apr 14 23:55:52 2023 +0200
9:
...
145: Author: alexcristaudo $<$alexcristaudo1@gmail.com$>$
146: Date:   Sat Apr 8 22:03:17 2023 +0200
147:
148: Added user functionality and browsing content
149:
150: commit ef8f150d3c85215047bef78cdfb26fcde948c572
151: Author: alexcristaudo $<$alexcristaudo1@gmail.com$>$
152: Date:   Thu Apr 6 09:16:07 2023 +0200
153:
154: Project Files with base functions implemented (validation and error messages not implemented)

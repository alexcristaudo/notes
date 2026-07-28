---
title: "— [2.0cm] 1.5pt — CSC3002F Networks and Socket Programming 2.0pt — [0.6cm] Assignment 1 *10"
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-Networks1.tex]
---
> [!warning]
> Compiled from **src-Networks1.tex** by the built-in LaTeX renderer — Unhandled commands left as-is: \title, \normalsize, \HRule, \LARGE, \uppercase, \vspace, \baselineskip, \author…
> The original .tex is attached above.

# — [2.0cm] 1.5pt — CSC3002F Networks and Socket Programming 2.0pt — [0.6cm] Assignment 1 *10

\title{ \normalsize

\HRule{1.5pt}
\LARGE **\uppercase{CSC3002F Networks and Socket Programming}
                                \HRule{2.0pt}
\LARGE{Assignment 1} \vspace*{10\baselineskip}**
                                }
\author{
**Authors**
Nicholas Cristaudo: CRSNIC014
Alexander Cristaudo: CRSALE010
Julia Cotterrell: CTTJUL001}

            \date{Date: 4 March 2024}

\newcommand{\msg}[2]{
    $<$#1$>$#2
}

## Application overview

The application was designed specifically for peer-to-peer real-time communication through TCP and UDP sockets. The use of both TCP and UDP sockets was mainly due to the differing nature of these sockets. Namely, UDP for quick and easy transferring of messages and files, and TCP for an established and ongoing connection to the specified server. These 2 sockets were used in conjunction to provide ease of use whilst maintaining constant states within the application.

## Project Design and Functionality

### Server Implementation

The server handles user connectivity, registration and authentication. User connectivity is established with a TCP-based connection from the client to the server for constant connectivity. Furthermore, the server acts as a repository, storing all client information. The following is stored in the server:

- The username of a specific user is connected to their address (a tuple **(IP, Port)**) as a two-way mapping, using 2 dictionaries
- The status of all the clients. The possible options are: **active, inactive, offline, appear offline** where **active** means the client can receive messages, **inactive** means the client is online, but cannot receive peer-to-peer messages and **appear offline** means that the user will not show up when clients query online users. This is in a dictionary, mapping **tuple_address** to a status
- {The clients that are currently in a global chat room. This is in a list}
- {The chat connections. That is, mapping each client to the client they are currently trying to chat to. This is in a dictionary}

The server initializes with the main thread waiting for TCP connections from clients. When a client connects, the username is sent through and validated to ensure it is unique (until a valid username is presented). Then, another thread is created to manage that client. The new thread is responsible for dealing with receiving and sending messages for that specific client. The main thread does not manage any clients and only listens for new connections.
As specified in **Protocol Specification**, the clients send messages with headers that the server processes to determine the message request. The server then does the relevant computation and sends a return message back to the client. Examples could be: Retrieving the IP for another client, showing all clients that are online, Validating the inputted username, Changing status, adding and removing to the chat room, sending a message to the chat room (which the server uses the chat room connections to distribute the message via UDP to the clients, and adding a chat connection from one user to another (for if a user wants to chat directly to another). The server keeps a consistent record of the stored data by removing/adding as required.

### Client Implementation

#### CRSALE010

The client code is run with the IP address of the server as a command line argument. When the client is first run, the client creates a TCP connection to the server to communicate with the server. This is how messages to and from the server are processed for each client. The server then returns the port the client connected with, and then the client binds on that port to receive UDP messages. This then allows other clients to obtain any other clients tuple address from the server and thus make communication viable (as the server stores the IP and Port of each user). Each connected client chooses a username and uses the server to validate that username. When it is valid, they are connected and can now begin using the **Features** of the server. Each client has 2 different threads, one for listening for messages to its IP and Port (UDP Messages from other clients/the server), and another for sending and receiving server messages, and sending UDP messages (this is TCP with the server and UDP with other clients). The messages to the server contain a header and a message, in the form **$<$header$>$message** which is then used to understand the request from the client. For example, **$<$IP$>$CRSALE010** sent my CRSNIC014, is a request to get the IP address and port number of CRSALE010 and return that the CRSNIC014. The server sends a return message which is received by the TCP connection. When the listening thread receives a message, the message is checked to see whether: It is a file transfer request, a message from the server (chat room message), or a message from another client and thus executes accordingly. If it is a file request, it listens for data until the filename is received again, signifying the end of the file. If it is a chat room message, the message is simply printed. If it is a message from another client, the thread checks if they are currently chatting with the user that sent the message. If not, that message is declared as "pending" and only displayed when the user is connected, otherwise the message is displayed to the user. This is done by each client implementing a dictionary for incoming messages (mapping tuple_address to a list of messages)

#### CRSNIC014

1. **Architecture Overview:** The client architecture uses UDP-based socket connections to establish connections to other clients and uses a TCP-based socket connection to establish a connection to the server. These connections in conjunction with each other allow for the client to support various functionalities such as the registration of users, the viewing of active users, peer-to-peer communication between clients, a global chat room for multiple clients, changing of user status and the transfer of files from one client to another.
2. **Text-based Communication:** The client allows users to engage in peer-to-peer text-based communication in real-time through the use of multi-threading to actively listen for incoming messages whilst simultaneously supporting the sending of outgoing messages.
3. **Multiple client interaction:** The client interacts with the server to implement a global chatroom where multiple clients can interact with each other simultaneously.
4. **Active User Visualization:** The client acts as an interface that provides a list of currently active users.
5. **Status management:** The client implements user status management allowing for privacy considerations, whereby users can appear inactive to avoid receiving messages and can appear offline to other users. The client also only allows for messages to be sent when a 2-way UDP connection is active between 2 clients, otherwise, messages are put on hold.
6. **Security and Privacy:** the messages sent and received by clients are routed to the correct clients via the use of their IP address and port number for a UDP connection
7. **Message integrity:** The client implements a Unicode checksum variation to verify the integrity of messages that are sent and received by clients
8. **Command line arguments:** The client implementation allows for command line arguments to be inputted, namely the IP address of the server, an example is:
python3 Client.py $<$IP Address$>$
#### CTTJUL001

1. Introduction:
The client code presented here is a part of a chat application that enables users to interact, exchange messages, and share files. The application runs on a client-server architecture where clients connect to a central server to coordinate communication.
2. Functionality:
**User Authentication**: The user is prompted to enter a username upon launching the client application. The entered username is sent to the server for authentication and is stored there, and then the server responds with a confirmation message. The client checks the validity of the username based on the confirmation received from the server. **User Interaction**: The client provides a menu-driven interface allowing users to perform  various actions. Options include chatting with another user, viewing active users, changing status, joining a chat room, sending files, and quitting the application. **Chat Functionality**: Users can initiate one-on-one chats with other active users. A separate thread is dedicated to listening for incoming messages, ensuring asynchronous communication. Users can also participate in a chat room where messages are broadcasted to all members that have joined the chat room through option 5 of the menu. **Status Management**: Users can set their status through option 3 of the menu as "active," "inactive," or "appear offline." The client sends status changes to the server, updating the user's online status that affects whether other users that are online would be able to contact the client. **File Transfer**: Users can send files to each other. The application supports file transfer during one-on-one chats. The server facilitates the exchange of IP addresses for direct file transfer between clients. **Error Handling**: This client code incorporates error handling mechanisms, such as verifying received messages using ASCII sums, to ensure the integrity of data.
3. Implementation:
**Threading**: The use of threads allows the client to handle multiple tasks concurrently, such as listening for messages while simultaneously interacting with the user. **Socket Communication**: Sockets are employed for communication between the client and server. TCP sockets are used for reliable, connection-oriented communication, and UDP sockets are used for broadcasting messages. **Code Readability**: The code has been organized and commented to enhance readability. Function and variable names are chosen to be descriptive, making the code easier to understand. **User Interface**: The user interface is implemented through a command-line menu in which the client chooses an action 1-5 or quit, providing a straightforward way for users to navigate and choose actions.

### Basic Features

The following features are present:

- **Peer-to-peer, text-based communication**, allowing 2 clients to privately chat with one another
This image shows the chatting between Alex and Nic.
(Alex) \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ (Nic)
{networks1_assets/chat1.png}     {networks1_assets/chat2.jpg}
- **Online user visualisation**, this is presented along with the state of the user.
(Left) shows 2 active clients. (Right) has 2 clients, appearing offline and being inactive
{networks1_assets/state1.png}     {networks1_assets/state2.png}
- **User status management**, allowing users to directly change their state, prohibiting messages if they are 'inactive'. The default status is 'active' and when a client exits, the client is 'offline'. This is also shown in the above images. An additional image is provided for offline users
{networks1_assets/state3.png}

### Additional, Creativity Features

- **Text-based global chat room** supporting multiple clients chatting simultaneously
(ALEX) \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ (JULIA) \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ (NIC)
{networks1_assets/global1.png}      {networks1_assets/global2.png}     {networks1_assets/global3.jpg}
- **Client-to-Client file transfer** allowing 2 different users to transfer files to each other. The receipt shows a prompt:
{networks1_assets/file_transfer.png}
- **Pending messages**, which entails that if the other client isn't on the direct chat, the messages are pending and sent through when the other client joins the peer-to-peer chat. This is shown in the peer-to-peer communication under the basic features. Nic receives no messages after he has left, and another image showing this:
(NIC) \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ (ALEX)
{networks1_assets/pending2.jpg} {networks1_assets/pending1.png}
- **Message validation** is added to each message sent via PCP and UDP. The Unicode Sum (described under **Reliability Considerations**) of each message is added to the end of the message, and when a message is received, the message is validated to see if the Unicode Sum is the same. This is an example of the messages the server receives
{networks1_assets/validation.png}

## Protocol Design

The protocol design defines the framework of communication between Clients, with Clients and the Server. Some basic aspects of the design include: real-time interaction, message reliability (the Unicode Sum), and authentication in that a user can only sign back into their user if they have the same IP address. Confidentiality is dealt with by allowing the user to become 'inactive' and thus not receive any peer-to-peer messages. The user can be in an 'Appear Offline' state, in which they will not show up if someone queries the members, and direct messages will not be sent.

### Message Structure and Type

#### Commands

A client establishes a TCP connection to the server. The client also terminates this connection when they become offline (quit the application). Clients create a UDP socket with a unique port number allowing other clients to send messages. This is also terminated when they become offline

#### Data Transfer

Data is transferred with a header attached to each message. This header acts as an identifier for the type of message transmitted. The following are headers used:

- \msg{user}{username}: This is a request to add a new client with a specified username.
- \msg{IP}{username}: This is a request to return the tuple (IP, Port) of the user with the specified username
- \msg{view}{}: This is a request to display all the viewers that are online and active/inactive
- \msg{change}{state}: This is a request to change the state of a user
- \msg{paired}{(tuple_address)}: This is a request to check if the sending user is currently chatting to the user with tuple_address
- \msg{unpair}{}: This unpairs the current user from their chatting
- \msg{chatRoom}{message}: There are 2 parts. If message = "", the sender is added to the chat room (a request to join the chat room). If message != "", this is a request to send **message** to all users in the chat room
- \msg{removeChatRoom}{}: This is a request to remove the user from the chat room
- \msg{filename}{}: This is a request for another client to create a new file with the specified file name, as more data will follow to transfer the file
- A message with no header is also sent to UDP ports of clients. The sender address clarifies if this is from the server (chat room) or another client (peer-to-peer communication)

#### Control

The ASCII Sum is used to determine whether a received message is correct or not. If it is not, an exception is raised. A TCP connection with the server also guarantees communication from Client to Server. Multi-threading was also used when connections to the server were established, allowing for multiple users to connect to the server simultaneously whilst minimising data loss and preventing congestion.

#### Sequence Diagram

{networks1_assets/client-client.png}
{networks1_assets/client-server.png}

## Reliability Considerations

When a string is sent, a number is attached to the end of the message (placed in [ ]). This number represents the sum of all the Unicode characters in a message. For example, "hello" becomes "hello[n]" where n = $31^1 \times $Unicode('h') + $31^2 \times 
 $Unicode('e') + ... + + $31^5 \times 
 $Unicode('o'). Then when a message is received, the number is checked against the received message. If they differ, the received message is different and an exception is raised which notifies the client that there was an error in transmission. The use of the powers of prime $31$ multiplied with the Unicode codes allows for a greater security check. Should string "abcde" become "bacde", the multiplying of the primes will detect this error. There is also reliability in the messages sent across, as data validation is done for all inputs and receipts of messages. Corresponding error messages are communicated with the user should they input something invalid (like a username that doesn't exist)

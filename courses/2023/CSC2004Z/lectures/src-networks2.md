---
title: Src Networks2
type: lecture
tags: [latex]
status: needs-review
source: latex
assets: [src-Networks2.tex]
---
> [!warning]
> Compiled from **src-Networks2.tex** by the built-in LaTeX renderer
> The original .tex is attached above.

pdf{Networks2Title.pdf}

## TCP Tracing

### Question 3

The part of a TCP Segment that identifies that segment as a SYN segment, is the SYN bit (acting as a flag). If the SYN bit is set to 1, then that segment is a SYN segment. Note the ACK bit would be 0, so using both the ACK bit and SYN bit helps us identify the segment as only a SYN segment

### Question 4

A segment is identified as a SYNACK segment if both the SYN and ACK bits are 1.
gaia.cs.umass.edu determines the Acknowledgement field of the SYNACK message by returning $x+1$ where the sequence number of the SYN request is $x$. In my trace file, SYNACK response at number 63 has acknowledgement number 2932492894. This is the SYNACK for the SYN request in number 18 which has sequence number 2932492893

### Question 8

No, the sender is never throttled.
The **Congestion Window Reduced** flag is not set for the responses by gaia.cs.umass.edu. So if the flag is not set in the TCP packet response, the server is not indicating that it has reduced its window size due to congestion.

### Question 9

Yes. The field has [TCP Retransmission] in its information. These segments can be spotted as segments whose sequence number is lower than the sequence number before that segment (as a previous sequence number is being sent later). If we graph the sequence numbers sent against time from my computer to the server, any dips in the graph show re-transmissions. The graph looks as such:
{networks2_assets/number_graph.png}

One such retransmission looks like
{networks2_assets/example1.png}

## IP Tracing

### Question 15

The **more fragments** field indicates whether an IP datagram has more fragments incoming. This is set to 1 for all but the last segment. So by itself, the more fragments field is not enough. The **fragment offset** is then used to determine the position of the fragment relative to the start of the original datagram. This means the first fragment has offset 0 (again, by itself, this value is not enough). If this is not 0, that segment was fragmented. Now, both of these need to be 0 to ensure that the datagram has not been fragmented  Since both the more fragments and fragment offset are 0, the IP datagram was not fragmented.

{networks2_assets/fragment.png}

### Question 16

The following always change:

The header checksum (contents will always change), the identification field. The destination port always changes.
The time-to-live does not always change from one datagram to the next, but changes every few datagrams

### Question 17

The source and destination IPs stay the same (same computer sending to the same server). The source port stays the same. The protocol number (17 = UDP) stays the same as the same protocol is used to send the datagrams. All the flags stay the same [Reserved, More Fragments, Dont fragment] and the lengths (header, payload)

### Question 18

They increase by 1 for each datagram sent to the server

### Question 19

ICMP [with code 1]

### Question 20

The pattern is the same in that each sent request will differ by 1 from the previous sent request. The received response will differ by 1 from the previous received response, but the sent and received messages start on different values so do not increment by one with each other. In my trace file, the sent datagrams have identifications: $64929 \to 64930 \to 64931 \to ...$ while the ICMP responses have identifications: $26761 \to 26762 \to 26763 \to ...$

### Question 21

No. The TTL field can change drastically. In my trace, ICMP packet number 59 (trace number) from 10.0.0.1 has time to live 63, whereas the next packet at trace number 61 from 96.120.66.9 has time to live 253

### Question 22

This experiment involves comparing the total time taken and the RTT, which stands for Round-Trip Time and this is the time it takes to get a response after initiating a network request. Firstly, a trace must be recorded when a lower stage of load-shedding is happening. That is, download Wireshark and have a stable internet connection. A base packet capture is obtained as described in the assignment brief, where one uploads a text file to the website while capturing the packets. By filtering with the keyword 'tcp', record the time of the first [SYN] request. This is the start of the transfer. Then filter by keyword 'http' and record the time of the HTTP response from the server with OK in the information section. This is the confirmation that the request was successful. The difference between the beginning and end gives the total time taken. Now repeat the same, but during a higher stage of load-shedding and compare the times. Multiple readings can be taken of each to ensure better results. TCP Time Sequence (Stevens) graphs can also be used to check for how many re-transmissions are done and to compare the overall time on a graph. This is done by Statistics $\to$ TCP Stream Graphs $\to$ Time Sequence (Stevens), and ensure that it is plotting from host to server and not the other way. An RTT summary is obtained by filtering with 'tcp.analysis.ack_rtt $>$ 0.1'. The bottom right states what percentage of packets with a slow RTT

### Question 23

By running tcp.analysis.flags, the following show: TCP Retransmission, TCP Dup ACK, TCP ACKed unseen segment, TCP Out-of-Order. 8.5% had an RTT above 0.1.
Running 'tcp.flags.reset == 1' shows 3 different connection resets.

def convert_to_binary(decimal):
    result_string = ""
    while decimal > 0:
        remainder = decimal % 2
        decimal = decimal//2
        result_string = str(remainder) + result_string
    return result_string


print(convert_to_binary(12))

# Add a breakpoint at the start of the program to prevent skipping the debug (breakpoints specify where to start)
"""
Continue / Pause: F5
Step Over: F10
Step Into: F11
Step Out: Shift F11
Restart: Shift Command F5
Stop: Shift F5

Step Into: Step Into is used for debugging the test steps line by line. When the procedure gets called, Step Into enables you to get inside the procedure and debugs the procedure steps line by line. 
Step Over: Step Over will enable, only after the debugging is started with Step Into / Run From Step / Run to Step

Step Over command:

This command lets the application execute the next action. If the action involves a call to an operation, it does not step into its implementation (it steps over it instead).
Step Into command:

This command lets the application execute the next action. If the action involves a call to an operation, it steps into its implementation and breaks the execution on the first action of that implementation.
Step Out command:

This command lets the application execute until the currently executed operation implementation is returned.

See below for an example:
"""


def a(n):
    for i in range(n):
        b(i)
        # STEP INTO GOES INTO THE B FUNCTION WHEREAS STEP OVER JUST CALLS IT AND GOES TO THE TOP OF THE FOR LOOP


def b(i):
    print("NUMBER", i)


a(10)

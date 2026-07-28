---
title: COM SCI
type: lecture
status: needs-review
source: onedrive
assets: [COM-SCI.docx]
---
> [!warning]
> Converted from .docx with 6 warning(s) — check tables and equations. Original attached.

Implicit downcast = compile time error

Explicit is run time

LinkedLists:

Adding to start: head = new Node(itemName, head); -> creates a new head pointing to previous head. If node is generic, head = new Node<T>()…

Deleting head node: if (head != null) head = head.link;

Deleting last node:

Node temp = head.link;

Node prev = head;

While (temp.hasNext()) {

Temp = temp.link;

Prev = prev.link;

}

Prev.link = null;

Cannot do:

Node temp = head.link;

While (temp.hasNext()) {

Temp = temp.link;

}

temp = null; -> This just overrides the variable temp, not the node

Iterator Constructor: position = head;, previous = null;

Deleting a node: previous.link = position.link; position = position.link (updating variable)

This is normally done with a list iterator. Since they reference the same node, any changes made to the list iterator changes the original linked list

Updating the variable means that the deleted node is no longer in use

Adding a node: (between nodes previous and position)

Node temp = new Node(newData, position);

Previous.link = temp;

Previous = temp;

Checking if a list iterator has a next: return position != null;

HOW ADDING COMPONENTS WORKS

1\. the row number is used in a specified grid layout. Starts with 1 column

2\. If the number of components exceeds the number of rows, the column is

changed so there are enough. Rows stays the same. Columns can go above specified range

3\. If there are n rows and m columns, components are added in the order:

r1c1, r1c2, ..., r1cm, r2c1, ..., rncm

the action Command is defaulted to the text on the button

UML: Inheritance is a “is a” relationship

Composition is a “has a” relationship

If A has B, the arrow goes from B to A

If A uses B, arrow goes to A

If X gives us Y but Y does not give us X, arrow goes from X to Y

Person gives us address, address does not give us person (could be multiple people) so arrow goes from Person to Address

A house has a room. Goes from room to house. Goes to bigger object

Aggregation is composition but cannot exist independently. If A has B, but B can exist without A, this is composition but not aggregation

A car has an engine, but an engine can exist without a car

/ is derived. We show derived variables, not methods

Java created by Sun Microsystems, James Gosling, sold to Oracle

Application: main method

Applet: Little Java Application – runs in browser

OOP is a methodology consisting of objects that interact with one another through the use of actions (methods) 

Java uses a compiler to convert high-level language into byte code. An interpreter translates Java byte-code into machine code and executes it line by line

Identifiers: The name of a variable 

*   Basic rules for naming identifiers: 
    *   Cannot start with a digit 
    *   All characters must be letters, digits, or \_ 
    *   Case sensitive (Rate and rate are different variables) 
    *   Reserved words (public class void static) 
    *   Predefined identifiers like String, println, System can be assigned values but creates confusion 
*   Valid Names: 
    *   X 
    *   X1 
    *   X\_1 
    *   \_abc 
    *   ABC123 
    *   Sum 
    *   Data2 
    *   bigBonus 
*   Invalid Names: 
    *   12 
    *   3X 
    *   %change 
    *   Data-1 
    *   Myfirst.java 
    *   PROG.CLASS 
*   CONSTANT variables are uppercase and words separated by \_ (e.g. GRAVITY\_OF\_ME = 9.8) 
    *   Variables for which their values do not change 
    *   public static final int GRAVITY = 7; 
*   Class names start with an uppercase (Good practice, e.g. MyFirstProgram.java) 

*(image omitted — open the attached original)*

Precedence rules (if there are no parenthesis): 

*   First 
    *   Unary operators (+, -, ++, --, !) (increment/decrement and signs of values i.e. positive or negative) 
*   Second 
    *   Binary arithmetic operators (\*, /, %) 
*   Third 
    *   Binary arithmetic operators (+, -) 

Byte->short->int->long->float->double

Type Casting: changing types of variables 

Type coercion: Java does type conversion for you 

Formatting: printf() 

%6.2f can be explained like: 

*   Display up to 6 right justified characters, if less than 6 then pad with whitespace (field width of 6) 
*   Display exactly 2 digits after the decimal point (.2) 
*   Display a floating point number (f) 

Strings = %s 

Line breaks/new line = %n 

Integer = %d 

Float is basically the same way as double %f. Does not implicitly convert int to float

%6.2f will be used to right justify (align) 

%-6.2f will be used to left justify (align) 

A package is a collection of classes that is stored in a manner that makes it easily accessible to any program

nextLine() reads in the escape sequence \\n at the end of the line but that is not shown in the string value that is returned 

Next() and nextInt() and nextDouble(), etc… causes a problem here because they don’t read in the new line character: 

Keyboard.useDelimiter(","); separates words by a comma instead of a space when reading in a line 

compareTo: 

S1.compareTo(s2) 

*   Returns negative number if s1 comes before s2 
*   Returns 0 if equal 
*   Returns positive number if s2 comes before s1 
*   The comparison is done using their Unicode numbers, so we can get the Unicode difference using compareTo \[similar to ord() in python, just gives the difference in their unicodes \] 

An array is a data structure used to process a collection of data that is all the same type

An algorithm is a set of precise instructions that lead to a solution (normally written in pseudocode) 

Tracing Variables: Watching one or more variables change value while a program is running 

*   Trace testing 

Formal Parameters: 

*   The defining of parameters in method declaration 

Arguments/actual parameters: 

*   The actual values when the method is called 

A parameter is a local variable

Information Hiding: 

*   Also known as abstraction 
*   Separating the description of how to use a class from the implementation 
*   Such as how class methods are defined 
    *   Descriptive name and parameter names 
*   Helps to avoid information overload 
*   Access to variables/information should be restricted to reduce the interconnectedness of a system 

Preconditions vs Postconditions: See bottom for examples 

*   Precondition: 

States what is assumed to be true when the method is called 

The method should not be used and cannot be expected to perform correctly unless the precondition holds 

*   Postcondition: 
    *   Describes the effect of a method call 
    *   It tells you what will be true after the method is executed in a situation in which the precondition holds 
    *   For a method that returns a value, the postcondition describes the value returned by the method 

Mutator: used to change the values of an instance variable within a class 

Accessor: used to call the value of an instance variable within a class 

NOTE: mutator methods can return a Boolean value (can check if the age was actually changed in this case) 

*   Boolean = false 
    *   Boolean name; //auto is false 
*   Other primitive types are initialized to the zero for their type 
    *   Int age; //auto is 0 
    *   Char c; //auto initialized to the Unicode character with code number 0 (this is the Unicode code for null) 
*   Class types are initialized to null 
    *   ClassName obj; //auto is null 

NOTE: local variables are not automatically initialized 

*   If java cannot find a method signature (parameter) that exactly matches a method invocation, it will try to use automatic type conversion 
*   Sometimes automatic type conversion can cause problems if you are using overloading methods in your class (i.e. you have a method with formal parameter int and a method with formal parameter double and you input a number) 

A class with a type parameter is a generic class. A generic method does not need to be in a generic class, e.g.:

*(image omitted — open the attached original)*

class HelloWorld {

public static <T, V> boolean compareGenerics(T t, V v) {

return t.getClass() == v.getClass();

}

public static void main(String\[\] args) {

System.out.println(HelloWorld.<String, Integer>compareGenerics("Hello World", 2));

Must mention the class name first otherwise an error is thrown

}

}

The generic brackets are needed to define the generic data type (either in the class definition to use in the whole class or in one method)

class HelloWorld {

public static <T> T returnGeneric(T t) {

return t;

}

public static void main(String\[\] args) {

System.out.println(HelloWorld.<String>returnGeneric("Hello World"));

}

}

*(image omitted — open the attached original)*

Answer: Yes, When the i++ and ++i are used in isolation, their effects are the same

Java runs the i++ after every iteration and so i++ and ++i will do the same

*(image omitted — open the attached original)*

3 marks indicates 3 mistakes

You cannot use the private constructor to create an object.

The modifier public means that there are no restrictions on where an instance variable or method can be used The modifier private means that an instance variable or method cannot be accessed by name outside of the class

Can have abstract class with no abstract method

Null pointer exception is a run time error

Aggregation: The child can exist without the parent

Like the engine can exist without the car but the Engine is part of the Car, without engine, no car

*(image omitted — open the attached original)*

Both a “has a” relationship. No movie = no move theatre, so aggregation not simple association

Simple association: not entirely made of or a part of.

Person gives you Address, so points from Person to Address

Make all variables private in UML

A constructor is a special kind of method that is called when creating an object using the “new” operator. They do not have a return type, not even void. The name of a Constructor is the same as the class name

When an object is created: Book b1 = new Book();

A reference variable, b1 to a Book object is created

Memory is allocated for a Book object

Constructor executed

B1 is assigned the reference of the Book object

A ragged array is when different rows have different number of columns.

double\[\]\[\] grades = new double\[2\]\[\];

grades\[0\] = new double\[3\];

grades\[1\] = new double\[4\];

*   ﻿﻿A deep copy of an object is a copy that, with one exception, has no references in common with the original
*   ﻿﻿Exception: References to immutable objects are allowed to be shared
*   ﻿﻿Any copy that is not a deep copy is called a shallow copy

﻿﻿This type of copy can cause dangerous privacy leaks in a program

Upcasting: Object of derived class assigned to variable of Base Type

Down: Type casting is performed from Base to Derived

*(image omitted — open the attached original)*

Clone method: Ensures the copy is of the correct type

*   If (and only if) return type == class type then return type in the override can be changed to a descendent class of the base method

﻿﻿This is known as a covariant return type

*   If final is placed before a method, then it cannot be overridden in a child class

﻿﻿It final is put before class, then that class cannot be extended

*   ﻿﻿A superclass = parent = base class is more general and inclusive, but simpler
*   ﻿﻿A subclass = child = derived class is more specialized, less inclusive, and more complex

﻿﻿As more instance variables and methods are added, the number of objects that can satisfy the class definition becomes more restricted

*   Three pillars of object-oriented programming (00P)
*   ﻿﻿Encapsulation
*   ﻿﻿Inheritance
*   ﻿﻿Polymorphism

﻿﻿Polymorphism is the ability to associate many meanings to one method name

Encapsulation in Java is **a mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit**

*(image omitted — open the attached original)*

Java uses late binding for all methods (except private, final, and static methods)

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)**(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

An iterator can be used to add/delete/change nodes at the current position. This is implemented by reassigning the position and/or previous nodes. *(image omitted — open the attached original)*

*(image omitted — open the attached original)*

The copy constructor should create an object that is a separate, independent object, but with the instance variables set so that it is an exact copy of the argument object

*   ﻿﻿A class that contains no methods (other than constructors)
*   that change any of the data in an object of the class is called an immutable class
*   ﻿﻿Objects of such a class are called immutable objects
*   ﻿﻿It is perfectly safe to return a reference to an immutable object because the object cannot be changed in any way

﻿﻿The String class is an immutable class

*   ﻿﻿A class that contains public mutator methods or other public methods that can change the data in its objects is called a mutable class, and its objects are called mutable objects
*   ﻿﻿Never write a method that returns a mutable object

﻿﻿Instead, use a copy constructor to return a reference to a completely independent copy of the mutable object

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

An interface contains only method headings and not complete method implementations, and does not contain constructors or instance variables. while an abstract class can contain some methods that have complete implementations, constructors and instance variables(1)

A class that implements an interface uses the keyword 'implements' while a class that inherits an abstract class uses the keyword 'extends' (1)

An interface and all its methods should be declared public, while an abstract class can have some protected members(I mark).

*(image omitted — open the attached original)*

compareTo method: Default is to return -1 if a < b and 1 if a > b (a.compareTo(b)) and 0 if they are equal*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

Mention that a WindowListener or ActionListener catches an Event

*(image omitted — open the attached original)*

setActionCommand( sets the action command variable of a button which acts as its identifier \[1\].

*(image omitted — open the attached original)*

*(image omitted — open the attached original)*

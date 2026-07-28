// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class LinkedList<T> {
    class Node<A> { // Different name to distinguish between generic for linked list and node
                    // Can get rid of and use the generic for linked list, like listiterator
        Node<A> link;
        A data;

        public Node() {
            link = null;
            data = null;
        }

        public Node(A data) {
            link = null;
            this.data = data;
        }

        public Node(A data, Node<A> link) {
            this.link = link;
            this.data = data;
        }

        public Node<A> copy() {
            return new Node<A>(this.data, this.link);
        }

        public boolean hasNext() {
            return this.link != null;
        }

        public String toString() {
            return data + " -> ";
        }
    }

    Node<T> head;

    public LinkedList() {
        head = null;
    }

    public void addToStart(T info) {
        head = new Node(info, head);
    }

    public void addToEnd(T info) {
        Node<T> pos = head.copy();
        while (pos.hasNext()) {
            pos = pos.link;
        }
        pos.link = new Node<T>(info);
    }

    public void printList() {
        Node<T> pos = head.copy();
        if (pos.data == null) {
            return;
        }
        while (pos.hasNext()) {
            System.out.print(pos);
            pos = pos.link;
        }
        System.out.println(pos.data);
    }

    class ListIterator {
        Node<T> current;
        Node<T> previous;

        public ListIterator() {
            current = head;
            previous = null;
        }

        public T next() {
            previous = current;
            current = current.link;
            return previous.data;
        }
    }

    public ListIterator iterator() {
        return new ListIterator();
    }

}

class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<String>();
        list.addToStart("Alex");
        list.addToStart("Tron");
        list.addToStart("Nic");
        list.addToEnd("Chesney");
        list.printList();

        LinkedList.ListIterator l = list.iterator();
        System.out.println(l.next());
        System.out.println(l.next());

    }
}

package GUI;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Test extends JFrame {

    JLabel out;
    boolean done = false;

    public Test() {
        setLayout(new GridLayout(5, 2));
        // priotitises rows. 1 row then rest form column. If more rows than components,
        // takes up only n rows
        // Fills up the rows, so r1c1, then r2c1, ... then goes to r1c2 after enough
        // components are added
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(600, 600);

        JButton button = new JButton("Hello");

        JButton b2 = new JButton("B2");
        JButton c2 = new JButton("C2");
        out = new JLabel("Pick a Button");
        add(out);
        add(button);
        add(b2);
        add(c2);
        add(new Button("buttoYen"));
        add(new Button("buttYen"));
        add(new Button("button"));
        // So 6 divides into a 3x2 region

        add(new Button("buen"));
        // 7 is 4x2 with one missing. If more components than than rows, fills by r1 c1
        // then r1 c2 then r2 c1 ...

        add(new Button("buttoYen"));
        add(new Button("buttYen"));
        add(new Button("button"));
        add(new Button("buen"));

        add(new JTextField(""));
        // Adding more than row x col adds a new column to the gridlayout aoutomatically

        // * HOW ADDING COMPONENTS WORKS
        // ! 1. the row number is used in a specified grid layout. Starts with 1 column
        // ! 2. If the number of components exceeds the number of rows, the column is
        // ! changed so there are enough. Rows stays the same
        // ! 3. If there are n rows and m columns, components are added in the order:
        // ! r1c1, r1c2, ..., r1cm, r2c1, ..., rncm
    }

    public static void main(String[] args) {
        Test t = new Test();
        t.setVisible(true);

    }

}

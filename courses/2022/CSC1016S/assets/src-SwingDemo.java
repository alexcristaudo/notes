package GUI;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SwingDemo extends JFrame implements ActionListener {
   private JLabel lab;

   public SwingDemo() {
      setSize(500, 300);
      setTitle("Swing Demo GUI");
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      setLayout(new GridLayout(3, 2));

      JButton b1 = new JButton("Click me");
      b1.setFont(new Font("Cambria", 0, 40));
      b1.setActionCommand("1");
      b1.addActionListener(this);
      add(b1);

      JButton b2 = new JButton("Click me");
      b2.setFont(new Font("Cambria", 0, 40));
      b2.setActionCommand("2");
      b2.addActionListener(this);
      add(b2);

      lab = new JLabel("This is a label");
      lab.setFont(new Font("Cambria", 0, 40));
      add(lab);
   }

   public void actionPerformed(ActionEvent e) {
      String a = e.getActionCommand();

      if (a.equals("1"))
         lab.setText("Hello");
      else if (a.equals("2"))
         lab.setText("Goodbye");
   }

   public static void main(String[] args) {
      SwingDemo gui = new SwingDemo();
      gui.setVisible(true);
   }
}

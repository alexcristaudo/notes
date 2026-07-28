package GUI;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class ComponentDemo extends JFrame {
   public ComponentDemo() {
      // Setup window
      setSize(500, 200);
      setTitle("Component Demo GUI");
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      setLayout(new GridLayout(1, 1));

      // Add text field
      JTextField in = new JTextField("Enter name", 30);
      in.setFont(new Font("Cambria", 0, 40));
      String inputString = in.getText();
      in.setText("");
      add(in);

      // Add menu
      JMenu sortMenu = new JMenu("Sort by");
      sortMenu.setFont(new Font("Cambria", 0, 40));

      JMenuItem recent = new JMenuItem("Recent");
      recent.setText("Recent");
      recent.addActionListener(new ItemListener());
      sortMenu.add(recent);

      JMenuItem likes = new JMenuItem("Most likes");
      likes.addActionListener(new ItemListener());
      sortMenu.add(likes);

      add(sortMenu);

      JMenuBar bar = new JMenuBar();
      bar.add(sortMenu);
      setJMenuBar(bar);
   }

   public static void main(String[] args) {
      ComponentDemo gui = new ComponentDemo();
      gui.setVisible(true);
   }
}

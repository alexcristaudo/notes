package GUI;

import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.Color;

public class FirstWindow extends JFrame {
   public static final int WIDTH = 600;
   public static final int HEIGHT = 400;

   public FirstWindow() {
      super();
      setSize(WIDTH, HEIGHT);

      setTitle("First Window Class");
      setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);

      JButton endButton = new JButton("Click to end program");
      endButton.setBackground(Color.BLUE);
      endButton.addActionListener(new EndingListener());
      add(endButton);
   }
}

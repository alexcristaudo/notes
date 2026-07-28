package GUI;

// Compute future value of Investment
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;

public class newGUI extends JFrame implements ActionListener {

    JTextField text = new JTextField(8);

    public newGUI() {
        setSize(600, 500);
        setLayout(new GridLayout(2, 4));
        JButton button = new JButton("Hello");
        add(button);
        add(text);
        button.addActionListener(this);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getActionCommand().equals("Hello"))
            text.setText("You pressed Hello");

    }

    public static void main(String[] args) {
        new newGUI();
    }
}

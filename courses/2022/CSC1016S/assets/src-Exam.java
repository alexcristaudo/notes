package GUI;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Exam extends JFrame implements ActionListener {
    private JTextArea text;
    private JLabel label;

    public Exam() {
        super("Exam 2017");
        setSize(500, 200);
        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);// 1
        setLayout(new BorderLayout());
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(0, 2));
        text = new JTextArea("Enter text here");
        JScrollPane scroll = new JScrollPane(text);
        add(scroll, BorderLayout.CENTER);
        JButton b1 = new JButton("Do Something 1");
        b1.setActionCommand("0");// 2
        b1.addActionListener(this);
        panel.add(b1);
        JButton b2 = new JButton("Do Something 2");
        b2.setActionCommand("1");
        b2.addActionListener(this);
        panel.add(b2);
        add(panel, BorderLayout.SOUTH);
        label = new JLabel("Label Display");
        add(label, BorderLayout.NORTH);
    }

    public void actionPerformed(ActionEvent e) {
        String a = e.getActionCommand();
        if (a.equals("0")) {
            label.setText(text.getText());
        } else if (a.equals("1")) {
            text.setText("");
        }
    }

    public static void main(String[] args) {
        Exam e = new Exam();
        e.setVisible(true);
    }
}
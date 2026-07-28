package GUI;

// Compute future value of Investment
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;

public class TestGUI extends JFrame implements ActionListener {
    private JTextField jtfInvestmentAmount;
    private JTextField jtfYears;
    private JTextField jtfInterestRate;
    private JTextField jtfFutureValue;
    private JButton jbtCalculate;

    public static void main(String[] args) {
        JFrame frame = new TestGUI();
        frame.setSize(400, 200);
        frame.setTitle("Future Value Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null); // Center the frame
        frame.setVisible(true);
    }

    public TestGUI() {

        JPanel p = new JPanel();
        p.setLayout(new GridLayout(4, 2));
        p.add(new JLabel("Investment Amount"));
        p.add(jtfInvestmentAmount = new JTextField(8));
        p.add(new JLabel("Years"));
        p.add(jtfYears = new JTextField(8));
        p.add(new JLabel("Annual Interest Rate"));
        p.add(jtfInterestRate = new JTextField(8));
        p.add(new JLabel("Future value"));
        p.add(jtfFutureValue = new JTextField(8));
        jtfFutureValue.setEditable(false);

        setLayout(new BorderLayout());
        add(p, BorderLayout.CENTER);

        JPanel p1 = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        p1.add(jbtCalculate = new JButton("Calculate"));
        add(p1, BorderLayout.SOUTH);

        jtfInvestmentAmount.setHorizontalAlignment(JTextField.RIGHT);
        jtfYears.setHorizontalAlignment(JTextField.RIGHT);
        jtfInterestRate.setHorizontalAlignment(JTextField.RIGHT);
        jtfFutureValue.setHorizontalAlignment(JTextField.RIGHT);

        jbtCalculate.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        // see Question 6.1.b)

    }

}

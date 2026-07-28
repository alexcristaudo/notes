package GUI;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Listener implements ActionListener {

    int type;

    public Listener(int type) {
        this.type = type;
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // TODO Auto-generated method stub
        if (this.type == 1) {
            System.out.println("Wrong");
        } else {
            System.exit(0);
        }
    }
}

public class CurrentAccount extends BankAccount  {
    
    double feeRate;
    double rate;
    double totalFee;

    public CurrentAccount(String name, String number, double feeRate, double rate) {
        super(name, number);
        this.feeRate = feeRate;
        this.rate = rate;
    }

    public void applyFees() {
        withdraw(totalFee);
        totalFee = 0;
    }

    public void applyInterest() {
        if (availableFunds() < 0) {
            super.withdraw(Math.abs(availableFunds())*(rate/100));
        }
    }

    public void deposit(final double amount) {
        super.deposit(amount);
        totalFee += feeRate;
    }
    public void withdraw(final double amount) {
        super.withdraw(amount);
        totalFee += feeRate;
    }

    public String toString() {
        return super.toString() + ", R" + totalFee + " fees pending.";
    }
}

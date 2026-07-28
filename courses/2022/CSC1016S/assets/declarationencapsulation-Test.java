public class Test {
    public static void main(String[] args) {
        final Currency currency = new Currency("R", "ZAR", 100);
        final TimePeriod pOne = new TimePeriod(new Duration("hour", 1), new Duration("hour", 2));
        final TimePeriod pTwo = new TimePeriod(new Duration("hour", 2), new Duration("hour", 3));
        final TariffTable tariffTable = new TariffTable(2);
        // TariffTable.addTariff(null, null);

        final TimePeriod o = new TimePeriod(new Duration("hour", 0), new Duration("hour", 1));

        final TimePeriod n = new TimePeriod(new Duration("minute", 30), new Duration("minute", 90));
        System.out.println(n.precedes(o));

    }
}

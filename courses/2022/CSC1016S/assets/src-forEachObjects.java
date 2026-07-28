class forEachObjects {
    public static void main(String[] args) {
        Int[] arr = new Int[5];
        arr[0] = new Int(5);
        
        int cnt = 0;
        for (Int a : arr) {
            System.out.println(a == arr[cnt]);
            a = new Int(1);
            cnt++;
        }

        for (Int a : arr) {
            System.out.println(a);
        }
    }
}

class Int {
    int intValue;

    public Int(int intValue) {
        this.intValue = intValue;
    }

    public String toString() {
        return "" + intValue;
    }
}
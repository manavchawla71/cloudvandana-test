public class RomanToInteger {
    public static void main(String[] args) {
        String roman = "IX";
        int result = romanToInteger(roman);
        System.out.println(roman + " = " + result);
    }

    public static int romanToInteger(String s) {
        int[] values = {1000, 500, 100, 50, 10, 5, 1};
        char[] symbols = {'M', 'D', 'C', 'L', 'X', 'V', 'I'};

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int index = new String(symbols).indexOf(c);
            int value = values[index];

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }

            prevValue = value;
        }

        return result;
    }
}

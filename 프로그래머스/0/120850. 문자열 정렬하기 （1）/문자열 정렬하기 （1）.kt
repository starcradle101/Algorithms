class Solution {
    fun solution(my_string: String): List<Int> {
        val numbers = mutableListOf<Int>()
        for (char in my_string) {
            if (char.isDigit()) {
                numbers.add(char.toString().toInt())
            }
        }

        numbers.sort()

        return numbers
    }
}
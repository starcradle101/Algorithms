class Solution {
    fun solution(num: Int): String {
        return if(kotlin.math.abs(num % 2) == 1) "Odd" else "Even"
    }
}
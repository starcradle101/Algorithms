class Solution {
    fun solution(n: Int): Int = if (n % 7 != 0) n / 7 + 1 else n / 7
}
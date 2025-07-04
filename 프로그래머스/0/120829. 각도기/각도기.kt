class Solution {
    fun solution(angle: Int): Int {
        return when {
            angle == 180 -> 4
            angle > 90 && angle < 180 -> 3
            angle == 90 -> 2
            else -> 1
        }
    }
}
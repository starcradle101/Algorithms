class Solution {
    fun solution(numbers: IntArray): IntArray {
        var answer: IntArray = intArrayOf()
        return numbers.map { it -> it * 2}.toIntArray()
    }
}
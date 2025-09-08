class Solution {
    fun solution(array: IntArray): Int {
    if (array.isEmpty()) {
        return -1
    }

    val frequencyMap = array.asIterable().groupingBy { it }.eachCount()
    val maxFrequency = frequencyMap.maxOf { it.value }
    val modes = frequencyMap.filterValues { it == maxFrequency }.keys

    return if (modes.size == 1) {
        modes.first()
    } else {
        -1
    }
}
}
class Solution {
    fun solution(num_list: IntArray): IntArray {
        var num_even = 0
        var num_odd = 0
        for(number in num_list) {
            if(number % 2 == 0) num_even += 1 else num_odd += 1
        }
        return intArrayOf(num_even, num_odd)
    }
}
class Solution {
    fun solution(arr: IntArray): Double {
        var answer = 0
        
        for(score in arr) {
            answer += score
        }
        
        return answer.toDouble() / arr.size
    }
}
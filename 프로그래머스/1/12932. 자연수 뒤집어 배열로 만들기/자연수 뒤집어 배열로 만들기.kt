class Solution {
    fun solution(n: Long): IntArray {
        var answer = intArrayOf()
        val nToString = n.toString()
        val length = nToString.length
        
        for(index in length - 1 downTo 0) {
            answer += nToString[index].digitToInt()
        }
        
        return answer
    }
}
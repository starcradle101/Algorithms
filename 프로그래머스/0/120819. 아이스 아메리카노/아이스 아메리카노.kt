class Solution {
    fun solution(money: Int): IntArray {
        val americanoPrice = 5500
        val count = money / americanoPrice
        val remainingMoney = money % americanoPrice
        
        val answer = intArrayOf(count, remainingMoney)
        
        return answer
    }
}
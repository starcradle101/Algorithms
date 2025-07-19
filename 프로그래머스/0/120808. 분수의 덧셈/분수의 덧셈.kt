class Solution {
    fun solution(numer1: Int, denom1: Int, numer2: Int, denom2: Int): IntArray {
        val denom = denom1 * denom2
        val numerSum = numer1 * denom2 + numer2 * denom1
        
        val gcdOfNumerAndDenom = getGCD(denom, numerSum)
        println(gcdOfNumerAndDenom)
        
        return intArrayOf(numerSum / gcdOfNumerAndDenom, denom / gcdOfNumerAndDenom)
    }
    
    fun getGCD(a: Int, b: Int): Int {
    var num1 = a
    var num2 = b

    while (num2 != 0) {
        val (newNum1, newNum2) = Pair(num2, num1 % num2)
        num1 = newNum1
        num2 = newNum2
    }
    return num1
}
}
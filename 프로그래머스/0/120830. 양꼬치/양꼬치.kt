class Solution {
    fun solution(n: Int, k: Int): Int {
        return 12000 * n + (k- n / 10) * 2000
    }
}

// 10인분 음료수하나
// 1인분 12000, 음료수 2000원
// n인분 + k개라면 총  얼마?
// k - n인분에서 나온 서비스 음료수 * 2000 + 양꼬치 n인분
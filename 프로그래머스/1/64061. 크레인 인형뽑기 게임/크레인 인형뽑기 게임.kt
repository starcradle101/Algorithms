class Solution {
    fun solution(board: Array<IntArray>, moves: IntArray): Int {
        val boardSize = board.size
        var answer = 0
        val bucket: MutableList<Int> = mutableListOf()

        for (i in moves) {
            for (j in 0 until boardSize) {
                if (board[j][i - 1] == 0) {
                    continue
                } else {
                    bucket.add(board[j][i - 1])
                    board[j][i - 1] = 0

                    if (bucket.size > 1 && (bucket.last() == bucket[bucket.lastIndex - 1])) {
                        answer += 2
                        bucket.removeLast()
                        bucket.removeLast()
                    }
                    break
                }
            }
        }
        return answer
    }
}

// 바구니는 그냥 MutableList하고
// removeLast와 add 활용

// moves를 돌면서
// Array에 해당하는 위치로 이동
// Array 있는 해당 요소 값을 0으로 바꾸고
// 바구니에 요소 add로 추가
// 바구니 확인. 마지막요소와 그 뒤의 요소가 같으면
// removeLast 두 번 하고 정답 += 2
// 이걸 moves가 끝날 때까지

// 인형 뽑기 로직이 필요하다
// 0이면 continue 아니라면 뽑기(해당 인덱스 요소를 바구니에 추가, 그리고 그 자리는 0으로 만들기)
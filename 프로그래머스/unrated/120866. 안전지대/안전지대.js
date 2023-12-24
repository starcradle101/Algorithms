function solution(board) {
    const n = board.length;
    const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    
    function isValid(x, y) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }

    function markDangerous(x, y) {
        if (isValid(x, y) && board[x][y] !== 1) {
            board[x][y] = 2;
        }
    }

    // Mark all dangerous areas
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                offsets.forEach(offset => {
                    markDangerous(i + offset[0], j + offset[1]);
                });
            }
        }
    }

    // Count safe areas
    let safeAreaCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                safeAreaCount++;
            }
        }
    }

    return safeAreaCount;
}
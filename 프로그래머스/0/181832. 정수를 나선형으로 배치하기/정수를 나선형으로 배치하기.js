function solution(n) {
    const answer = Array.from(Array(n), () => Array(n).fill(0));
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0;
    
    let row = 0;
    let col = 0;
    let num = 1;
    
    while (num <= n * n) {
        answer[row][col] = num++;

        let nextRow = row + directions[directionIndex][0];
        let nextCol = col + directions[directionIndex][1];
        
        if (
            nextRow < 0 || 
            nextRow >= n || 
            nextCol < 0 || 
            nextCol >= n || 
            answer[nextRow][nextCol] !== 0
        ) {

            directionIndex = (directionIndex + 1) % 4;

            nextRow = row + directions[directionIndex][0];
            nextCol = col + directions[directionIndex][1];
        }
        
        row = nextRow;
        col = nextCol;
    }
    
    return answer;
}
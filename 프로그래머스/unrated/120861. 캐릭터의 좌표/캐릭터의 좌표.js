function solution(keyinput, board) {
	let playerPosition = [0, 0];
	const boardWidth = Math.floor(board[0] / 2);
	const boardHeight = Math.floor(board[1] / 2);

	const leftMax = -boardWidth;
	const rightMax = boardWidth;
	const upMax = boardHeight;
	const downMax = -boardHeight;

	for (let input of keyinput) {
		switch (input) {
			case 'up':
				if (playerPosition[1] + 1 <= upMax) {
					playerPosition[1] += 1;
				}
				break;
			case 'down':
				if (playerPosition[1] - 1 >= downMax) {
					playerPosition[1] -= 1;
				}
				break;
			case 'left':
				if (playerPosition[0] - 1 >= leftMax) {
					playerPosition[0] -= 1;
				}
				break;
			case 'right':
				if (playerPosition[0] + 1 <= rightMax) {
					playerPosition[0] += 1;
				}
				break;
		}
	}

	return playerPosition;
}
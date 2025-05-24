function solution(keyinput, board) {
	let current_coordinate = [0, 0];
	const x_max = parseInt(board[0] / 2);
	const x_min = parseInt(board[0] / 2) * -1;
	const y_max = parseInt(board[1] / 2);
	const y_min = parseInt(board[1] / 2) * -1;

	const direction_delta = {
		up: [0, 1],
		down: [0, -1],
		left: [-1, 0],
		right: [1, 0],
	};

	for (let input of keyinput) {
		const delta = direction_delta[input];
		let next_x = current_coordinate[0] + delta[0];
		let next_y = current_coordinate[1] + delta[1];

		if (
			next_x <= x_max &&
			next_x >= x_min &&
			next_y <= y_max &&
			next_y >= y_min
		) {
			current_coordinate = [next_x, next_y];
		}
	}
	return current_coordinate;
}


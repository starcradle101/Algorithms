function solution(dots) {
    var answer = 0;
    
    let maxX = Math.max(...dots.map(dot => dot[0]));
    let minX = Math.min(...dots.map(dot => dot[0]));
    let maxY = Math.max(...dots.map(dot => dot[1]));
    let minY = Math.min(...dots.map(dot => dot[1]));
    const width = Math.abs(maxX - minX);
    const height = Math.abs(maxY - minY);
    return width * height;
}

// x와 y 좌표에서 각각 가장 큰 값과 가장 작은 값의 차이를 구한다
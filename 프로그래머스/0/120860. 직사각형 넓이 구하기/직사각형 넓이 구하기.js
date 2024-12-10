function solution(dots) {
    
    const dots_x = dots.map(dot => dot[0]);
    const dots_y = dots.map(dot => dot[1]);
    
    const width = Math.abs(Math.max(...dots_x) - Math.min(...dots_x));
    const height = Math.abs(Math.max(...dots_y) - Math.min(...dots_y));
    
    return width * height;
}


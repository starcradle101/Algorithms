function solution(chicken) {
    if (chicken < 10) return 0;
    
    const service = Math.floor(chicken / 10);
    const left = service + chicken % 10;
    
    return service + solution(left);
}
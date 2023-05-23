function solution(order) {
    return [...order.toString()].filter(x => Number(x) !== 0 && Number(x) % 3 === 0).length;
}


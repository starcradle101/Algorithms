function solution(arr) {
    const [first, last] = [arr.indexOf(2), arr.lastIndexOf(2)];
    return (first === -1 && last === -1) ? [-1] : arr.slice(first, last + 1);
}


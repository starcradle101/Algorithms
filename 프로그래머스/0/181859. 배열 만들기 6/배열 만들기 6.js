function solution(arr) {
    let stk = [];
    
    for (let i = 0; i < arr.length; i += 1) {
        if (stk.length === 0) {
            stk.push(arr[i]);
        } else {
            (stk.at(-1) === arr[i]) ? stk.pop() : stk.push(arr[i]);
        }
    }
    return stk.length === 0 ? [-1] : stk;
}

function solution(array) {
    var answer = 0;
    let obj = {};
    for(let num of array) {
        (obj[num] === undefined) ? obj[num] = 1 : obj[num] += 1;
    }
    
    const values = Object.values(obj);
    const max = Math.max(...values);
    const isModeUnique = (values.filter(num => num === max).length === 1) ? true : false;
    
    if (!isModeUnique) return -1;
    
    const modeKey = Object.keys(obj).find(key => obj[key] === max);
    return parseInt(modeKey, 10);
}

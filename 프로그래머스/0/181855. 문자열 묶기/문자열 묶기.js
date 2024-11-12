function solution(strArr) {
    let lengthFrequencyArr = [];
    
    // 길이의 배열로 변환
    const strLengthArr = strArr.map((el) => el.length);
    
    // Set으로 중복 줄이기
    const strLengthArrSet = new Set(strLengthArr);
    strLengthArrSet.forEach((el) => {
        lengthFrequencyArr.push(strLengthArr.filter((num) => num === el).length)
    })
    
    return Math.max(...lengthFrequencyArr);
}
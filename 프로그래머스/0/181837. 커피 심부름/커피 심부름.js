function solution(order) {
    let answer = 0;
    
    const americanoTypes = ['iceamericano', 'americanoice', 'hotamericano', 'americanohot', 'americano', 'anything'];
    const latteTypes = ['icecafelatte', 'cafelatteice', 'hotcafelatte', 'cafelattehot', 'cafelatte'];
    
    for (let el of order) {
        if (americanoTypes.includes(el)) {
            answer += 4500;
        } else if (latteTypes.includes(el)) {
            answer += 5000;
        }
    }
    
    return answer;
}
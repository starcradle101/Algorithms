function solution(polynomial) {
    const terms = polynomial.split(' + ');
    let linearSum = 0;
    let constantSum = 0;

    terms.forEach(term => {
        if (term.includes('x')) {
            // 선형 항 처리
            const coefficient = term.replace('x', '').trim();
            linearSum += coefficient === '' ? 1 : parseInt(coefficient);
        } else {
            // 상수항 처리
            constantSum += parseInt(term);
        }
    });

    let result = '';
    if (linearSum > 0) result += `${linearSum === 1 ? '' : linearSum}x`;
    if (constantSum > 0) result += result ? ` + ${constantSum}` : `${constantSum}`;
    return result;
}

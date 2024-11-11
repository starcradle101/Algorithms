function solution(myStr) {
    const regEx = /[abc]/g;
    const modifiedStr = myStr.replaceAll(regEx, '#');
    const answer = modifiedStr.split('#').filter((el) => el !== '');
    
    return (answer.length !== 0) ? answer : ['EMPTY']
}
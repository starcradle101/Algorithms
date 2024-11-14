function solution(myString) {
    return myString.split('').map((el) => el < 'l' ? 'l' : el).join('');
}
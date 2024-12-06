function solution(my_string) {
    return [...my_string].map(char => {
        if (char.toUpperCase() === char) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

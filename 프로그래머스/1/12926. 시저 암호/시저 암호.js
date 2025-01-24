function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' ';
        
        const base = char.charCodeAt() >= 97 ? 97 : 65;
        return String.fromCharCode(base + (char.charCodeAt() - base + n) % 26);
    }).join('');
}
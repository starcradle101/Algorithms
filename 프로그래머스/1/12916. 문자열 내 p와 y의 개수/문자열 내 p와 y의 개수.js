function solution(s){
    const s_lowercase = s.toLowerCase();
    let characters = {
        p: 0,
        y: 0,
    }
    
    for (let char of s_lowercase) {
        if (char === 'p') characters.p += 1;
        if (char === 'y')characters.y += 1;
    }
    
    return (characters.p === characters.y) ? true : false;
}
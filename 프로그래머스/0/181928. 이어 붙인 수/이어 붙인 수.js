function solution(num_list) {
    let answer = 0;
    let [odd_concat, even_concat] = ['', ''];
    
    num_list.forEach((el) => {
        (el % 2 === 1) ? odd_concat += String(el) : even_concat += String(el);
    })
    

    return Number(odd_concat) + Number(even_concat);
}
function solution(my_string) {
    const num_from_string = my_string.match(/\d+/g);
    console.log(num_from_string)
    
    if (num_from_string === null) return 0;
    
    return num_from_string.reduce((acc, curr) => acc + Number(curr), 0)
}
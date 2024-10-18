function solution(my_string, is_suffix) {
    if (my_string.length < is_suffix) return 0;
    
    const suffix_length = is_suffix.length;
    for (let i = 0; i < my_string.length; i += 1) {
        if (my_string.slice(i) === is_suffix) return 1;
    }
    
    return 0;
}
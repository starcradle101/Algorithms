function solution(my_string, indices) {
    let answer = '';
    const str_array = my_string.split('');
    for (let i = 0; i < str_array.length; i += 1) {
      if (!indices.includes(i)) answer += str_array[i];
    }
    return answer;
}
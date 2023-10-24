function solution(phone_number) {
    let phone_number_array = [...phone_number];
    for (let i = 0; i < phone_number_array.length - 4; i++) {
        phone_number_array[i] = '*';
    }
    return phone_number_array.join('');

}
// 배열로 받아와서 
// 마지막 네 번째 요소까지를 제외한 요소를 변경 후 join
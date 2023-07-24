function solution(num_list) {
    let lastElement = num_list[num_list.length -1];
    let nextToLastElement = num_list[num_list.length - 2];
    if (lastElement > nextToLastElement) {
        num_list.push(lastElement - nextToLastElement);
    } else {
        num_list.push(lastElement * 2);
    }
    return num_list;
}
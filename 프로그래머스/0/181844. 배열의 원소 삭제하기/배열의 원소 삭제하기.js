function solution(arr, delete_list) {
    return arr.map((el) => {
        if (delete_list.includes(el)) {
            return '#'
        }
        
        return el
    }).filter((el) => el !== '#');

}


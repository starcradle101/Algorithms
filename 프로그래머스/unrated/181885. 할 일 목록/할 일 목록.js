function solution(todo_list, finished) {
    var answer = [];
    for (let i = 0; i < todo_list.length; i++) {
        if(finished[i] === false) {
            answer.push(todo_list[i]);
        } else {continue;}
    }
    return answer;
}
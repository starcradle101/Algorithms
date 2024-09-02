function solution(n, slicer, num_list) {
    let answer = [];
  
    switch(n) {
      case 1:
        answer.push(...num_list.slice(0, slicer[1] + 1));
        break;
      case 2:
        answer.push(...num_list.slice(slicer[0]));
        break;
      case 3:
        answer.push(...num_list.slice(slicer[0], slicer[1] + 1))
        break;
      case 4:
        for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
          answer.push(num_list[i]);
        }
        break;
    }
    return answer;
}
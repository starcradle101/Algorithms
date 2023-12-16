function solution(arr, queries) {
    var answer = [];

    for (let query of queries) {
        let minRange = query[0];
        let maxRange = query[1];
        let queryMin = query[2];

       
        let filteredElements = arr.slice(minRange, maxRange + 1).filter(element => element > queryMin);

        
        const queryValue = filteredElements.length > 0 ? Math.min(...filteredElements) : -1;
        answer.push(queryValue);
    }
    return answer;
}
function solution(array) {
    const frequency = array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {})
    
    const maxFrequency = Math.max(...Object.values(frequency));
    
    const modes = Object.entries(frequency).filter(([num, freq]) => freq === maxFrequency);
    
    
   return modes.length > 1 ? -1 : Number(modes[0][0]);
}
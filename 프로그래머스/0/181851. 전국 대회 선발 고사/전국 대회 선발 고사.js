function solution(rank, attendance) {
    const students = rank.map((el, idx) => ({
        rank: el,
        isAttending: attendance[idx],
        number: idx,
    }))
    .filter((el) => el.isAttending)
    .sort((a, b) => a.rank - b.rank);
    
    const a = students[0].number;
    const b = students[1].number;
    const c = students[2].number;
    
    return 10000 * a + 100 * b + c;
}
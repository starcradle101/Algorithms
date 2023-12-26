function solution(lines) {
    let overlapLength = 0;
    const maxRange = Math.max(...lines.flat());
    const minRange = Math.min(...lines.flat());

    for (let i = minRange; i < maxRange; i++) {
        let overlapCount = 0;
        for (let line of lines) {
            if (i >= line[0] && i < line[1]) {
                overlapCount++;
            }
        }
        if (overlapCount >= 2) {
            overlapLength++;
        }
    }
    return overlapLength;
}
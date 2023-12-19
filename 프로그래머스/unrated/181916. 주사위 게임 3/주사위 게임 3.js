function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = {};

    // 주사위의 각 숫자별로 등장 횟수를 계산
    dice.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    const uniqueNumbers = Object.keys(counts).length;

    // 네 주사위의 숫자가 모두 같은 경우
    if (uniqueNumbers === 1) {
        return 1111 * a;
    }

    // 세 주사위의 숫자가 같고 나머지 하나가 다른 경우
    if (Object.values(counts).includes(3)) {
        let p, q;
        for (let num in counts) {
            if (counts[num] === 3) {
                p = parseInt(num);
            } else {
                q = parseInt(num);
            }
        }
        return Math.pow(10 * p + q, 2);
    }

    // 두 개의 주사위 쌍이 서로 다른 동일한 값을 가지는 경우
    if (uniqueNumbers === 2 && Object.values(counts).every(val => val === 2)) {
        let nums = Object.keys(counts).map(Number);
        return (nums[0] + nums[1]) * Math.abs(nums[0] - nums[1]);
    }

    // 두 주사위가 같은 숫자이고 나머지 두 주사위가 각각 다른 숫자인 경우
    if (uniqueNumbers === 3) {
        let q, r;
        for (let num in counts) {
            if (counts[num] === 1) {
                if (q === undefined) {
                    q = parseInt(num);
                } else {
                    r = parseInt(num);
                }
            }
        }
        return q * r;
    }

    // 네 주사위 모두 다른 숫자인 경우
    return Math.min(...dice);
}
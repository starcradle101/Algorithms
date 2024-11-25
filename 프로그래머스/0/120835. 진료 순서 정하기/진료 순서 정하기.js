function solution(emergency) {
    const sorted_patients = [...emergency].sort((a, b) => b - a);
    const answer = emergency.map((el) => sorted_patients.indexOf(el) + 1);
    return answer;
}
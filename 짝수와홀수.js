function solution(num) {
    var answer = '';
    if (num % 2 === 1) {
         answer = 'Odd'
    } else {
         answer = 'Even'
    }
    return answer;
}
console.log(solution(3))
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
    // a와 b의 크기가 반대일때도 값을 반환해주기 위하여 if문을 사용한다
    if (a<=b) {                    
      var answer = 0;
    // a의 값이 b가 될때까지 1씩 커지게 만들어준다 (a++)
    // a -> a+1 -> (a+1)+1 -> {(a+1)+1}+1 ...
    for (a; a<=b; a++)
    // 더하기 할당 연산자(+=)는 오른쪽 피연산자 값을 변수에 더한 결과를 다시 변수에 할당해준다
    // 그러므로 answer + (answer+a) + {answer+(a+1)} + [answer+{(a+1)+1}] ... 이된다
    answer += a
    // 결과적으로 answer 에다가 a부터 a가 1씩 커지는 값을 더한 값을 return 받게된다
    return answer;  
    // a<=b라는 조건을 위해서 줬으므로 아래else 부분은 a>b일때 함수가 진행됨
    } else {
        var answer = 0;
    for (b; b<=a; b++)
    answer += b
    return answer; 
    }
}

console.log(solution(5,2))
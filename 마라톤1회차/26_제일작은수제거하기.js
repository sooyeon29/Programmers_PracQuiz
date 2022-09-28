/*문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, 
solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 
리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, 
[10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
입출력 예
arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1]
*/

function solution(arr) {
    var answer = [];
    let min = Math.min(...arr)
    if (arr.length<1) {
        return [-1]
    } else {
        answer = arr.pop(min)
    }
    return answer;
}


function solution(arr) {
    let answer = arr;                             // arr를 먼저 집어넣는다
    
    if(arr.length == 1){                          // arr 길이가 1이면
        return [-1];                              // -1 꺼낸다
    }
    let min = Math.min(...answer);                // arr의 최소값을 min에 넣는다
    for(let i = 0; i < answer.length; i++){       // arr의 길이만큼 반복문을 돌면서
        if(answer[i] === min) {                   // 배열 안에 min값이 있으면
            answer.splice(i, 1)                   // 그 값만 뜯어낸다
            break;                               // 그리고 탈출
        }    
    }
    return answer;                                // 정답 보여주기
  }
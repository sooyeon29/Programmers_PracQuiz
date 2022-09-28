/*문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 
구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 
바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
입출력 예
s	                return
"try hello world"	"TrY HeLlO WoRlD"
입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
"TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/

// *** map 함수 이용해보기!!
function solution(s) {
    var answer = '';
    let word = s.split(" ")
    for ( let i =0; i<word.length; i++) {
        for ( let j =0; j<word[i].length; j++) {
            if (j%2 === 0) {
               answer += word[i][j].toUpperCase()
            } else {
               answer += word[i][j].toLowerCase()
            }
        }
        if (i<word.length -1) {
            answer += ' '
        }
    }
    return answer;
}

console.log(solution("try hello world"))

function solution(s) {
return s
        .split(" ")
        .map((x) =>
            x
                .split("")
                .map((y, i) => (i%2 ===0 ? y.toUpperCase() : y.toLowerCase()))
                .join("")
            )
            .join(" ");
}

console.log(solution("try hello world"))

function solution(s) {
    let word = s.split(" ")
                // ['try', 'hello', 'world']
    let letter = word.map((x) => x.split("")
                /*0: (3) ['t', 'r', 'y']
                  1: (5) ['h', 'e', 'l', 'l', 'o']
                  2: (5) ['w', 'o', 'r', 'l', 'd'] */
                                  .map((y,i) => (i%2 === 0 ? y.toUpperCase() : y.toLowerCase()))
                                  .join("")
                         )
                         let sent = letter.join(" ")
                         return sent
}


    console.log(solution("try hello world"))
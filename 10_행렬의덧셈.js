/* 행렬의 덧셈
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 
결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아,
행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
입출력 예
arr1	        arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	    [[4],[6]]
*/

function solution(arr1, arr2) {
    var answer = [[]];
    // arr1의 첫번째 요소를 골라줌
    for (let i = 0; i<arr1.length; i++){
        answer[i] = [];
    /* arr1의 i번째 요소 중에 j번째 요소를 추출
    arr1[i]번째요소에 넣어줄 아이들을 찾기!
    arr1[i][j] ---> arr1의 i번째안의 j번째 요소
    arr2[i][j] ---> arr1의 i번째안의 j번째 요소
    를 찾아서 다한 후 answer의i번째로 리턴!
    */
        for (let j = 0; j<arr1[i].length; j++) {
            answer[i].push(arr1[i][j]+arr2[i][j])
        }
    }

    return answer;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))
console.log(solution([[1],[2]],[[3],[4]]))
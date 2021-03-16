/*
2번

What is the input string? Park

Park has 5 characters

*/

//출력결과는 입력받은 문자열이 그대로 나타나도록 할 것
//하나의 출력문만 사용할 것
//언어에서 제공하는 내장함수 사용
var strName;
strName = prompt('What is the input string?');
alert(strName+'은(는) ' +strName.length+'자 입니다.');

//도전과제
//사용자가 아무것도 입력하지않았을 때 엔터키를 치면 입력하라는 메세지를 나타내기

var strName;
strName = prompt('What is the input string?');
if(strName.length==0){
    alert("공백입니다.")

} else{
    alert(strName+'은(는) ' +strName.length+'자 입니다.');
}




//도전과제
//GUI버전 실시간 업데이트기능만들기 HTML활용가능

//step1
function cntStr(){
    var rtn;
    if(strName.length==0){
        rtn = "공백입니다.";
        return rtn;
    } else{
        rtn =  strName+'은(는) ' +strName.length+'자 입니다.';
        return rtn;
    }
}

cntStr(prompt('What is the input string?'))
/*
1번
*/

alert('안녕하세요 '+ prompt('이름이 무엇인가요')+' 님 반갑습니다.')

//출력부분을 별도로 설정
function f(name){
    var a;
    a = 'Hi! '+name+ ', nice to meet you!';
    alert(a);
    return a;
}
f(prompt('What is your name'));

//문자열 연결(String concatenation)기능 사용
function f(name){
    var a;
    a = '안녕';
    alert(a.concat(', ',name,' 반가워'));
    //return a;
}
f(prompt('What is your name'));



//변수를 사용하지 않는 새로운 버전
alert('안녕 '+prompt('이름이 무엇인가요?').concat(' ','반가워'))
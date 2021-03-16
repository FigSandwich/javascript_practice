alert('안녕하세요 '+ prompt('이름이 무엇인가요')+' 님 반갑습니다.')

function f(name){
    var a;
    a = 'Hi! '+name+ ', nice to meet you!';
    alert(a);
    return a;
}
f(prompt('What is your name'));

function f(name){
    var a;
    a = '안녕';
    alert(a.concat(', ',name,' 반가워'));
    //return a;
}
f(prompt('What is your name'));




alert('안녕 '+prompt('이름이 무엇인가요?').concat(' ','반가워'))
/*

*/

//prompt는 입력하면 String로 받는다
//자바스크립트는 문자형에 숫자를 곱하면 숫자형으로 변하고
//숫자형에 문자를 더하면 문자로 변한다



//숫자만 입력되도록
let fstNum = prompt('What is the first bumber?')*1
let secNum = prompt('What is the second bumber?')*1



let resAdd = fstNum + secNum;
let resSub = fstNum - secNum;
let resMulti = fstNum * secNum;
let resDiv = fstNum / secNum;



console.log(fstNum+'+'+secNum+'='+resAdd+ '\n'+
fstNum+'-'+secNum+'='+resSub+ '\n'+
fstNum+'*'+secNum+'='+resMulti+ '\n'+
fstNum+'/'+secNum+'='+resDiv+ '\n')

//음수 제한



function checkNum(num){
    if (num>=0){
        return num*1
    }else{
        return checkNum(prompt('숫자를 다시 입력해주세요'));
    }

}

let fstNum = checkNum(prompt('What is the first Number?')*1);
let secNum = checkNum(prompt('What is the second Number?')*1);

//계산부분을 함수로 구현

function calc(fstNum,secNum){
    var calcArr[] = { '+','-',''}
    for(let i=0; i<5; i++){



    }



}


//Gui시용
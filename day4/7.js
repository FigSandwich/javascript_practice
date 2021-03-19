function calc(length,width){
    const res = length*width;
    const meter = res*0.09290304;
    let result = { r : res, m : meter     
    }
    return result

}

function print(result){
    console.log('The area is \n'+result.r+'square feet')
    console.log (result.m+'square meters'); 

}

//calc()
function print(result){
    console.log('The area is \n'+result.r+'square feet')
    console.log (result.m+'square meters'); 

}


function chkNum(inputNum){
    if (typeof inputNum =='number'){
        return inputNum
        } else{
            return chkNum(prompt('enter again'))
        }
        
}


function calc(length = chkNum(prompt('enter length')),width = chkNum(prompt('enter width'))){
    const res = length*width;
    const meter = res*0.09290304;
    let result = { r : res, m : meter     
    }
    return result

}




print(calc(chkNum(prompt('length')),chkNum(prompt('width'))))


function retire(age,retireAge){
    var objDate = new Date();
    var year = objDate.getFullYear();
    var remainYear = Number(retireAge)-Number(age);
    var retireYear = Number(year) + Number(remainYear);

    return remainYear+'년이 남으셨네요 \n' + retireYear+'년에 은퇴하세요'
}

retire(prompt('현재나이는?'), prompt('정년은 몇살까지?'));

//도전과제 이미 퇴직 했다면?

function retire(age,retireAge){
    var objDate = new Date();
    var year = objDate.getFullYear();
    var remainYear = Number(retireAge)-Number(age);
    if (remainYear<0){
        return '이미 퇴직하셨네요'

    }
    
    var retireYear = Number(year) + Number(remainYear);

    return remainYear+'년이 남으셨네요 \n' + retireYear+'년에 은퇴하세요'
}

retire(prompt('현재나이는?'), prompt('정년은 몇살까지?'));
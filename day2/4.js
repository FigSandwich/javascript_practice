/*
Mad Libs는 간단한 게임으로, 누군가가 이야기 문장을 만드는 데 낱말이 들어갈 자리를 몇 군데 비워놓은 다음, 다른 사람이 빈 칸을 채워 전체 이야기를 만드는 것이다. 이렇게 해서 만들어진 이야기는 바보같은 내용이 되거나 웃긴 내용이 되기도 한다.

이제 명사, 동사, 형용사, 부사에 해당되는 단어를 입력 받은 후 여러분이 만든 이야기에 넣어 완성된 이야기를 출력해보자.

출력 예

Enter a noun: dog 
Enter a verb: walk 
Enter an adjective: blue 
Enter an adverb: quickly 

Do you walk your blue dog quickly? That's hilarious!

제약 조건이 
프로그램에서는 한 개의 출력문만 사용할 것 만일 사용하는 프로그래밍 언어가 문자열 보간이나 문자열 대체를 지원하는 경우, 출력문을 만드는 데 활용할 것

도전 과제

입력할 수 있는 단어를 더 늘려 이야기를 확장시켜보자. 대답에 따라 이야기가 만들어지는 브랜칭 스토리(Branching story)를 구현해보자. 브랜치 스토리 개념은 4장 '의사 결정'에서 확인할 수 있다

*/


let str = '나는 오늘 점심에 AAAA를 먹었다. 후식으로는 BBBB를 먹었다. 오늘 저녁으로는 CCCC를 먹을까 DDDD를 먹을까?';
let replaced_str = str.replace('AAAA', prompt('오늘 점심에 먹을 음식은?')).replace('BBBB', prompt('오늘 후식으로 먹은 음식은?')).replace('CCCC', prompt('저녁에 먹을 음식은?')).replace('DDDD', prompt('저녁후보 2'));
console.log('양식 : ', str);
alert('변경 후 : ', replaced_str);
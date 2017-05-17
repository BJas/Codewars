function solution(number){
  // convert the number to a roman numeral
  var str = number.toString().split('').reverse().join('');
  var i=0;
  var strx = '';
  while(i < str.length) {
    if(i == 0) {
    if(str[i] == '4') strx += "VI";
    else if(str[i] == '9') strx += "XI";
    else if(str[i] >= '5') strx += ("I").repeat(parseInt(str[i])%5) + "V";
    else strx += ("I").repeat(parseInt(str[i]));
    }
    else if(i == 1) {
    if(str[i] == '4') strx += "LX";
    else if(str[i] == '9') strx += "CX";
    else if(str[i] >= '5')strx += ("X").repeat(parseInt(str[i])%5) + "L";
    else strx += ("X").repeat(parseInt(str[i]));
    }
    else if(i == 2) {
    if(str[i] == '4') strx += "DC"; 
    else if(str[i] == '9') strx += "MC"; 
    else if(str[i] >= '5') strx += ("C").repeat(parseInt(str[i])%5) + "D";
    else strx += ("C").repeat(parseInt(str[i]));
    }
    else  strx += ("M").repeat(parseInt(str[i]));
    console.log(strx);    
    i++; 
  }
  return strx.split('').reverse().join('');
}

function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
  var r = {'M':1000,'CM':900,'D':500,'CD':400,'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'IV':4,'V':5,'I':1}
  var temp, res = 0;
  for(var obj in r) { 
    var temp = roman.split(obj); 
    if(temp.length>1) { 
      roman = roman.replace(obj,''); 
      res+= (temp.length-1)*r[obj]; } }
  return res;
}

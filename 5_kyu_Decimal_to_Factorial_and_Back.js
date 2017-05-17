function dec2FactString(nb) {
	// your code
  var temp = 1;
  var i = 2;
  while(temp < nb) { temp *= i;  i++; } 
  i -= 1;
  temp /= i;
  var str = '';
  while (nb > 0) {
    i--;  
    var x = Math.floor(nb/temp);
    if(i>=10 && x >= 10) str += String.fromCharCode(x+55);
    else str += (x).toString();
    nb -= x*temp;
    temp =  Math.floor(temp/i);
  }
  
	return str+Array(i+1).join('0');
}
function factString2Dec(str) {
	// your code
  var a = 0, b = 1, res = 0;
  for(var i=str.length-1; i>=0; i--) {
    var temp = parseInt(str[i]);
    if(temp == NaN) temp = str[i].charCodeAt() - 55;
    res += temp*b;
    a++;
    b *= a;
  } 
	return res;
}

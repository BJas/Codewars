function nextBigger(n){
  //your code here
  var str = n.toString().split('');
  for(var i=str.length-1; i>=0; i--) {
    if(str[i] > str[i-1]) {
        var temp = str[i];
        var tempind = i;
        for(var j = i+1; j < str.length; j++) {
           if(str[j] < temp && str[i-1] < str[j]) {
               temp = str[j];
               tempind = j;
           }
        }
        [str[i-1],str[tempind]] = [str[tempind],str[i-1]];
        return parseInt(str.slice(0,i).join('')+str.slice(i,str.length).sort().join(''));
      }
    }
    return -1;
}

function getLosAngelesPoints(results) {  
  // your awesome code here
  var res = 0;
  var hasNumber = /\d/;
  for(var i = 0; i < results.length; i++)
  {
     if(!hasNumber.test(results[i][0]) && results[i][0].length > 11 && results[i][0].substr(0,11) == 'Los Angeles') {
        res += parseInt(results[i][1]);
      }
  }
  return res;
}

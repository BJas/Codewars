function sumOfDivided(lst) {
  //your code
  function isPrime(a) {
      for (var j = 2; j <= Math.sqrt(a); j++) {
        if(a % j == 0) return false;
      }
      return true;
  } 
var newLst = [];
     
  for (var i = 2; i < 10000; i++) {
    if(isPrime(i)) {
      var count = 0;
      var was = false;
      for(var obj in lst) {
        if(lst[obj] % i == 0) { 
          count += lst[obj];
          was = true;
          }
      }
      if(was) newLst.push([i,count]);
    }
  }
      return newLst;
}

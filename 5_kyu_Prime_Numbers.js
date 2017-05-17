function isPrime(number) {
    for(var i=2; i<=Math.sqrt(number); i++) if(number%i==0) return false;
    return number <2 ? false : true;
}

function getPrimes(start, finish) {
  var newList = [];
  function isPrime(number) {
    for(var i=2; i<=Math.sqrt(number); i++) if(number%i==0) return false;
    return number <2 ? false : true;
}
  for(var i=Math.min(start,finish); i<=Math.max(start,finish);i++)
    if(isPrime(i)) newList.push(i);
    return newList;
}

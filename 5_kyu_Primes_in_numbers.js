function primeFactors(n){
    //your code here
    function isPrime(a) {
      for(var i=2;  i<= Math.sqrt(a); i++)  if(a%i==0) return false;
      return true;
    }
    var i=2;
    var str = '';
    while(n > 1) {
       var temp = 0;
       if(isPrime(i) && Number.isInteger(n/i)) {
          while(Number.isInteger(n/i)){
          n /= i; temp++;
        }
        if(temp == 1) str +='('+i.toString()+')';
        else if(temp>1) str += '('+i.toString()+'**'+temp.toString()+')';
      }    
      i++;
    }
    return str;
}

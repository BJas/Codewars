function step(g, m, n) {
    // your code
    function isPrime(numb) {
       for(var j = 2; j < numb; j++) {
           if(numb%j == 0) return false;  
       }
       return true;   
    }

    for (var i = m; i <= n; i++) {
      if(isPrime(i)) { if(isPrime(i+g)) {return [i, i+g] }}
    }
    return null;
}

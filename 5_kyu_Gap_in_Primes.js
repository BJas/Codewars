function gap(g, m, n) {
    // your code
    function isPrime(a) {
      for(var i = 2; i <= Math.sqrt(a); i++) { if(a%i==0) return false;}
      return true;
    } 
    for (var i = m; i <= n; i++) {
      var b = true;
      if(isPrime(i) && isPrime(i+g) && i+g <= n && b) {
        for(var j = i+1; j < i+g; j++) { if(isPrime(j)) b = false; }
          if(b) return [i,i+g];
       }
    }
  return null;
}

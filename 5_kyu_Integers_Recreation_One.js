function listSquared(m, n) {
    // your code
    function isDivisor(i) {
      var res = 0;
      for(var j=1; j<=Math.floor(i/2); j++) if(i%j==0) res += j*j; res+=i*i;
      if(Number.isInteger(Math.sqrt(res))) return res;
      return 0; 
    }
    var newList = [];
    for(var i=m; i<=n; i++) {
      var x = isDivisor(i); 
      if(x>0) newList.push([i,x]);
    }
    return newList;
}

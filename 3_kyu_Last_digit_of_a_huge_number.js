function lastDigit(as){
  var res;
   var b = true;
   for (var i=0; i<as.length; i++) {
     console.log(as[i]);
     if(as[i] != 0 && b) {b = false;}
   }
   if(b) return as.length%2 ? 0: 1;
   for (var i=as.length-1; i>0; i--) {
      var temp = as[i]%100;
      if(as[i-1]%10 == 0 && as[i] != 0) { if(as[i] == 1) res = as[i-1]; else res = as[i-1]*4;}
      else if(as[i] == 0) res = 1; 
      else  {if(as[i] > 4) res = Math.pow(as[i-1]%100,4)*Math.pow(as[i-1]%100,temp%4); else res = Math.pow(as[i-1]%100,temp%4);}
      as[i-1] = res;
    }
    return as[0]%10;

}

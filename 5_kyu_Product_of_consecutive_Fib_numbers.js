function productFib(prod){
  // ...
  function Fib(n) {
  return n = 0 ? 1 : n < 2 ? 1 : Fib(n-1) + Fib(n-2);
  }
  var t1,t2;
  var i = 0;
  while(Fib(i)*Fib(i+1) < prod) {t1 = Fib(i+1); t2 = Fib(i+2); i++;}
  return [t1,t2,t1*t2 == prod]; 
}

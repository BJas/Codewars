function perimeter(n) {
  var i = 1, first = 0;
  var second = 1, z = 1;
  while(i <= n) {second += first; first = second -first; z += second; i++}
  return 4*z; 
}

function bouncingBall(h,  bounce,  window) {
  // your code here
  var temp = h;
  var res = -1;
  while (0 < bounce && bounce < 1 && h > window && temp > window) { temp *= bounce; res +=2;}
  return res;
}

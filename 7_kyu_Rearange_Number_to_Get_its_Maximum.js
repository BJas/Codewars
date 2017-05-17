var maxRedigit = function(num) {
  // Do yor magic :)
    if(num > 99 && num < 1000) {
     return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
    }
    else return null;
};

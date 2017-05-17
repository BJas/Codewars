function longestConsec(strarr, k) {
    // your code
    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return "";
    }
    
    var i, j;
    var temp = "";
    
    for (j = 0; j < strarr.length - k + 1; j++) {
    
      var str1 = "";
        for (i = j; i < k + j; i++) {
          str1 += strarr[i];
        }
      
      if(str1.length > temp.length) {
        temp = str1.toString();
      }
    }
    return temp;
}

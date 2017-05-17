function accum(s) {
	// your code
  var str = "";
  for (var i = 0; i < s.length; i++) {
      str += s[i].toUpperCase();
    for (var j = 0; j < i; j++)
    {
       str += s[i].toLowerCase();  
    }
    if(i != s.length - 1) str += "-";
  }
return str;
}

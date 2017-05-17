function validBraces(braces){
  //TODO 
  function areSimilar(open, close) {
    if((open == '(' && close == ')') || (open == '{' && close == '}') || (open == '[' && close == ']')) return true;
    return false;
  }
  var newList = [];
  for(var i=0; i<braces.length; i++) {
    if(braces[i] == '(' || braces[i] == '[' || braces[i] == '{') newList.push(braces[i]);
    else if(braces[i] == ')' || braces[i] == ']' || braces[i] == '}') {
        if(newList.length == 0 || !areSimilar(newList[newList.length-1],braces[i])) return false;
        else newList.pop();
     }
  }
    return newList.length == 0 ? true : false;     
}

function numberGenerator() {
  var newList = [];
  var numb = Math.floor((Math.random() * 14) + 1);
  for(var i = 0; i < 6; i++) {
    newList.push(numb);
    numb += 7;
  }
  newList.sort((a,b) => {return a-b});
  numb = Math.floor(Math.random() * 10); 
  newList.push(numb);
  return newList;
}

function checkForWinningCategory(checkCombination, winningCombination) {
    var res = 0;
    for (var i = 0; i < 6; i++) {
      if(checkCombination.indexOf(winningCombination[i]) != -1) res++;
    }
    if(checkCombination[6] == winningCombination[6] && res > 1) return 2*(6-res)+1;
    else if (res > 2) return 2*(6-res)+2;
    else return -1; 
}

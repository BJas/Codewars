function filter_list(l) {
  // Return a new array with the strings filtered out
  var newList = [];
  for (var i in l) { 
    if(typeof l[i] === 'number') {
      newList.push(l[i]);
    }
  }
  return newList;
}

function numberCompare(a, b){
  if(a > b) return 1;
  if(a < b) return -1;
}

function comp(array1, array2){
  //your code here
  
  if (array1 != null && array2 != null)
  {
    array1.sort(numberCompare);
    array2.sort(numberCompare);
  }
  else 
  {
    return false;
  }
  
  for (var i in array1)
  {
          if (array1[i]*array1[i] != array2[i])
            {
                return false;
            }
  }
  return true;
}

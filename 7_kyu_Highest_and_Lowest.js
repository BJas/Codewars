function highAndLow(numbers){
  // ...
  var array1 = numbers.split(" ");
  array1.sort((a, b) => a - b);
  return array1[array1.length - 1] + " " + array1[0] 
}

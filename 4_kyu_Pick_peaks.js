function pickPeaks(arr){
  var pos = [];
  var peaks = [];
  var i = 1;
  console.log(arr);
  while(i <= arr.length-1) {
    if(arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
      pos.push(i); peaks.push(arr[i]);
    }
    else if(arr[i-1] < arr[i] && arr[i] == arr[i+1]) {
      var j = i;
      while(j < arr.length) {
        if(arr[j] < arr[i]) {pos.push(i); peaks.push(arr[i]); j = arr.length;}
        else if(arr[j] > arr[i]) j = arr.length;
        else j++;
      }
    }
    i++;
  }
  return {pos:pos,peaks:peaks};
}

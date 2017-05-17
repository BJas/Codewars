function orderWeight(strng) {
    // your code
    var newListx = strng.split(' ');
    var newDigitList = [];
    var a = [];
    for(var i = 0; i < newListx.length; i++) {  
      if(!Number.isInteger(parseInt(newListx[i]))) return '';
      a.push(parseInt(newListx[i]));
      var newList = newListx[i].split('');
      var sum = 0;
      for(var j = 0; j < newList.length; j++) sum += parseInt(newList[j]); 
      newDigitList.push(sum); 
      console.log(newDigitList, a);
    }
    var temp, tempx;
    for(var i = 0; i < newDigitList.length-1; i++) {
     for(var j = i+1; j < newDigitList.length; j++) {    
      if(newDigitList[i] > newDigitList[j] || (newDigitList[i] == newDigitList[j] && a[i].toString() > a[j].toString())){
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;

        tempx = newDigitList[i];
        newDigitList[i] = newDigitList[j];
        newDigitList[j] = tempx;
        }
      }
   }
     return a.join(' ').toString();
}

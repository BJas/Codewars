function getPercentage(sent, limit){
  // write code here
  if(sent == 0) return "No e-mails sent";
  else if (sent >= limit) return "Daily limit is reached";
  else {
    if(limit == null) return Math.floor(sent/1000*100).toString() + "%";
    else return Math.floor(sent/limit*100).toString() + "%";
  }
}

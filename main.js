function createMultiplyTable(start, end) {
  var conditionOne=isSmallerThanOrEqual(start,end);
  var conditionTwo=isNumberStandard(start, end);
  if(conditionOne && conditionTwo){
    var str=printAll(start, end);
  }
  return str;
}
//startnumber是否小于endnumber
function isSmallerThanOrEqual(start,end){
  if(start>end){
    return false;
  }else{
    return true;
  }
}
//两个数是否在1-1000之间
function isNumberStandard(start, end){
  if(start>=1 && end<=1000){
    return true;
  }else{
    return false;
  }
}
//打印每一行的信息
function printLine(start,end){
  var str="";
  for(let i=start;i<end+1;i++){
    if(i==end){
      str+=i+"*"+end+"="+i*end;
    }else{
      str+=i+"*"+end+"="+i*end+"\t";
    }
  }
  return str;
}
//打印全部信息
function printAll(start, end){
  var str="";
  for(let i=start;i<end+1;i++){
    if(i==end){
      str+=printLine(start,i);
    }else{
      str+=printLine(start,i)+"\n";
    }
  }
  return str;
}
module.exports = {
  createMultiplyTable,
};

function to1230(num){
  var digitArr=[];
  var remainder=0;
  var int=num;
  do{
    remainder = int%4;
    int = (int-remainder)/4;
    digitArr.push(remainder);
  }
  while(int!==0)
  return digitArr;
}

function reverseArr(arr){
  var orderedArr=[];
  for(var i=arr.length-1; i>=0; i--){
    orderedArr.push(arr[i]);
  }
  return orderedArr;
}

function to1240(num){
  var arr= reverseArr(to1230(num));
  var str=arr.join("");
  var result=str.replace(/3/g,"4");
  return result;
}

to1240(15);


function from4to3(num){
  var str = num.toString();
  var result=str.replace(/4/g,"3");
  return result;
}
function multiple(num,j){
  var result=1;
  for(var i=1; i<=j; i++){
    result=result*num
  }
  return result;
}
function toDec(num){
  var str=from4to3(num);
  var result=0;
  for(var i=0; i<str.length; i++){
    result=result+str[i]*multiple(4,str.length-1-i);
  }
  return result;
}
toDec(1210);

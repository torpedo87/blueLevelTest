#문제1
##1-1
```javascript
//10진법의 수를 4진법의 수로 바꾸기 위해 나머지랑 인수를 얻기
function to1230(num){
  var digitArr=[];
  var dividedNum=num;
  var remainder=dividedNum%4;
  var int=(dividedNum-remainder)/4;
  while(int>=4){
    remainder=dividedNum%4;
    int=(dividedNum-remainder)/4;
    digitArr.push(remainder);
    dividedNum=int;
    if(int<4){
      digitArr.push(int);
      return digitArr;
    }
  }
  if(int<4){
    digitArr.push(remainder);
    if(int!==0){
      digitArr.push(int);
    }    
    return digitArr;
  }
}

//얻은 나머지와 인수의 순서를 거꾸로
function reverseArr(arr){
  var orderedArr=[];
  for(var i=arr.length-1; i>=0; i--){
    orderedArr.push(arr[i]);
  }
  return orderedArr;
}

//3을 4로 바꾸기
function to1240(num){
  var arr= reverseArr(to1230(num));
  var str=arr.join("");
  var result=str.replace(/3/g,"4");
  return result;
}

```

##1-2
```javascript
//4를 3으로 바꿔서 4진법의 숫자로 바꾸기
function from4to3(num){
  var str = num.toString();
  var result=str.replace(/4/g,"3");
  return result;
}

//숫자 4를 j제곱하는 함수
function multiple(num,j){
  var result=1;
  for(var i=1; i<=j; i++){
    result=result*num
  }
  return result;
}
//4진법의 수를 10진법으로 바꾸기
function toDec(num){
  var str=from4to3(num);
  var result=0;
  for(var i=0; i<str.length; i++){
    result=result+str[i]*multiple(4,str.length-1-i);
  }
  return result;
}
```

#문제2
##2-1
```javascript
var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
function parseData(map_string){
  var pattern=/\d+/g;
  var obj={};
  //map을 width, height, data로 각각 나눠서 obj에 담기
  obj.width=parseInt(pattern.exec(map_string)[0]);
  obj.height=parseInt(pattern.exec(map_string)[0]);
  var dataPattern=/^\D.+/gm;
  var arr=[];
  for(var i=1; i<=obj.height; i++){
    arr.push(dataPattern.exec(map_string)[0]);
  }
  //data의 '-'를 공백으로 치환하기
  obj.data=arr.join("").replace(/\-/g," ");
  //object를 json형식으로 바꾸기
  var myJSON=JSON.stringify(obj);
  return myJSON;
}
```
##2-2
```javascript
function drawMap(json){
  //json형식을 obj형식으로 parse해서 width, height, data를 각각 나누기
  var obj=JSON.parse(json);
  var width=obj.width;
  var height=obj.height;
  var data=obj.data;
  var pattern=new RegExp('.{1,'+width+'}','g');
  var arr=[];
  for(var i=1; i<=height; i++){
    arr.push(pattern.exec(data)[0]);
  }
  //data의 각각의 행을 나누기 위해 \n 을 사이에 넣기
  var drawing=arr.join("\n");
  return drawing;
}
```

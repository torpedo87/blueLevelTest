var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
function parseData(map_string){
  var pattern=/\d+/g;
  var obj={};
  obj.width=parseInt(pattern.exec(map_string)[0]);
  obj.height=parseInt(pattern.exec(map_string)[0]);
  var dataPattern=/^\D.+/gm;
  var arr=[];
  for(var i=1; i<=obj.height; i++){
    arr.push(dataPattern.exec(map_string)[0]);
  }
  obj.data=arr.join("").replace(/\-/g," ");
  var myJSON=JSON.stringify(obj);
  return myJSON;
}
parseData(map);

function drawMap(json){
  var obj=JSON.parse(json);
  var width=obj.width;
  var height=obj.height;
  var data=obj.data;
  var pattern=new RegExp('.{1,'+width+'}','g');
  var arr=[];
  for(var i=1; i<=height; i++){
    arr.push(pattern.exec(data)[0]);
  }
  var drawing=arr.join("\n");
  return drawing;
}
drawMap(parseData(map));

var database;

var pos = [];
var position= [];
var array1 = [];
var col = "black";
var index = 0;


function setup(){
  createCanvas(1200, 600);
  //database = firebase.database();
  line(1000,0,1000,600);
  red1 = createSprite(1040,50,40,40);
  red1.shapeColor = "red";
  button1 = createButton("click");
  button1.position(1020,50);
  blue1 = createSprite(1100,50,40,40);
  blue1.shapeColor = "blue";
  button2 = createButton("click");
  button2.position(1080,50);
  green1 = createSprite(1160,50,40,40);
  green1.shapeColor = "green";
  button3 = createButton("click");
  button3.position(1140,50);
  yellow1 = createSprite(1040,150,40,40);
  yellow1.shapeColor = "yellow";
  button4 = createButton("click");
  button4.position(1020,150);
  black1 = createSprite(1100,150,40,40);
  black1.shapeColor = "black";
  button5 = createButton("click");
  button5.position(1080,150);
  white1 = createSprite(1160,150,40,40);
  white1.shapeColor = "white";
  button6 = createButton("erase");
  button6.position(1140,150);
  lime1 = createSprite(1040,250,40,40);
  lime1.shapeColor = "lime";
  button7 = createButton("click");
  button7.position(1020,250);
  pink1 = createSprite(1100,250,40,40);
  pink1.shapeColor = "pink";
  button8 = createButton("click");
  button8.position(1080,250);
  aqua1 = createSprite(1160,250,40,40);
  aqua1.shapeColor = "aqua";
  button9 = createButton("click");
  button9.position(1140,250);
  brown1 = createSprite(1040,350,40,40);
  brown1.shapeColor = "brown";
  button10 = createButton("click");
  button10.position(1020,350);
  purple1 = createSprite(1100,350,40,40);
  purple1.shapeColor = "purple";
  button11 = createButton("click");
  button11.position(1080,350);
  violet1 = createSprite(1160,350,40,40);
  violet1.shapeColor = "violet";
  button12 = createButton("click");
  button12.position(1140,350);
  line(1000,400,1200,400);
  line(1140,170,1180,170);
  line(1140,170,1140,130);
  line(1180,130,1180,170);
  line(1140,130,1180,130);
  Slider1 = createSlider(0,100,0);
  Slider1.position(1020,500);
  database = firebase.database();
  var Positionref = database.ref("position/pos");
  Positionref.on("value",readOperator,showError);
  colour();
}


function draw() {
  //console.log(position);
  for(var i = 0;i<position.length;i++){
    if(position[i]!== null){
    index++;}
  var x0 ="position/pos" + index ;
  database.ref(x0).update({
position : position[i]

      })}
  drawSprites();

}
function mouseDragged(){
  
pos=[mouseX,mouseY];
position.push(pos);
array1.push(position);
  var fVal = Slider1.value();
  w =map(fVal, 0, 100, 1, 5);
  for(var i = 0;i<position.length;i++){
    noStroke();
    fill(col);
   rect(position[i][0],position[i][1],w,w);
}
}

function readOperator(data){
<<<<<<< HEAD
  var pos = data.val();
  console.log(pos);
  if(pos!== null){
  for(var i = 0;i<pos.length;i++){
  //pos = positio.x;
  //pos = positio.y;
  rect(pos[i][0],pos[i][1],w,w);
}}
=======
  var positio = data.val();
  //console.log(positio);
  positio = positio;
 
  console.log(positio);
  for(var i = 0;i<position.length;i++){
  position[i][0] = positio.x;
  position[i][1] = positio.y;
}
>>>>>>> 9c49e3915e49569aed62f40f6256b48c2c1b6a92
}

function showError(){
  console.log("error");
}
function colour(){
  button1.mousePressed(function(){
    col = "red";
  })
  button2.mousePressed(function(){
    col = "blue";
  })
  button3.mousePressed(function(){
    col = "green";
  })
  button4.mousePressed(function(){
    col = "yellow";
  })
  button5.mousePressed(function(){
    col = "black";
  })
  button6.mousePressed(function(){
    col = "white";
  })
  button7.mousePressed(function(){
    col = "lime";
  })
  button8.mousePressed(function(){
    col = "pink";
  })
  button9.mousePressed(function(){
    col = "aqua";
  })
  button10.mousePressed(function(){
    col = "brown";
  })
  button11.mousePressed(function(){
    col = "purple";
  })
  button12.mousePressed(function(){
    col = "violet";
  })
}

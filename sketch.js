var database;

var pos = [];
var position= [];
var array1 = [];
var col = "black";
var index = 0;


function setup(){
  createCanvas(1200, 600);
  //database = firebase.database();
  red1 = createSprite(1040,60,40,40);
  red1.shapeColor = "red";
  button1 = createButton("click");
  button1.position(1030,60);
  blue1 = createSprite(1100,60,40,40);
  blue1.shapeColor = "blue";
  button2 = createButton("click");
  button2.position(1090,60);
  green1 = createSprite(1160,60,40,40);
  green1.shapeColor = "green";
  button3 = createButton("click");
  button3.position(1150,60);
  yellow1 = createSprite(1040,160,40,40);
  yellow1.shapeColor = "yellow";
  button4 = createButton("click");
  button4.position(1030,160);
  black1 = createSprite(1100,160,40,40);
  black1.shapeColor = "black";
  button5 = createButton("click");
  button5.position(1090,160);
  white1 = createSprite(1160,160,40,40);
  white1.shapeColor = "white";
  button6 = createButton("erase");
  button6.position(1150,160);
  lime1 = createSprite(1040,260,40,40);
  lime1.shapeColor = "lime";
  button7 = createButton("click");
  button7.position(1030,260);
  pink1 = createSprite(1100,260,40,40);
  pink1.shapeColor = "pink";   
  button8 = createButton("click");
  button8.position(1090,260);
  aqua1 = createSprite(1160,260,40,40);
  aqua1.shapeColor = "aqua";
  button9 = createButton("click");
  button9.position(1150,260);
  brown1 = createSprite(1040,360,40,40);
  brown1.shapeColor = "brown";
  button10 = createButton("click");
  button10.position(1030,360);
  purple1 = createSprite(1100,360,40,40);
  purple1.shapeColor = "purple";
  button11 = createButton("click");
  button11.position(1090,360);
  violet1 = createSprite(1160,360,40,40);
  violet1.shapeColor = "violet";
  button12 = createButton("click");
  button12.position(1150,360);
  Slider1 = createSlider(0,100,0);
  Slider1.position(1020,550);



  ClearButton = createButton("click and reload");
  ClearButton.position(1050,470);
  database = firebase.database();
  
  colour();
}


function draw() {
  
  line(1000,0,1000,600);
  line(1000,400,1200,400);
  line(1140,180,1180,180);
  line(1140,180,1140,140);
  line(1180,140,1180,180);
  line(1140,140,1180,140);
  line(1000,500,1200,500);
  Fetch();
  drawSprites();
  textSize(20);
  text("Thickness",1040,530);
  textSize(20);
  text("Colour",1060,30);
  textSize(20);
  text("Clear the Canvas",1030,430);
  ClearButton.mousePressed(function(){
    clear1();
  });

if(mouseX>=0 && mouseX<=1000 && mouseY>=0 &&mouseY<=600){
  if(mouseIsPressed){
    pos=[mouseX,mouseY];
    position.push(pos);
    
    var fVal = Slider1.value();
    w =map(fVal, 0, 100, 5, 10);
    Update();
  }
}
}

function readOperator(data){
  var pos = data.val();
  //console.log(pos);
  if(pos!== null){
    for(var a in pos){
      push();
      noStroke();
      fill(pos[a].colour);
    rect(pos[a].x,pos[a].y,pos[a].width,pos[a].width);
    pop();
    }
  }
}
  
  

function showError(){
  console.log("error");
}

function Update(){
  for(var i = 0;i<position.length;i++){
    if(position[i]!== null){
    index++;}
  var positionindex ="position" + index ; 
  database.ref(positionindex).set({
    x: mouseX,
    y: mouseY,
    colour:col,
    width:w
      })}
}
async function Fetch(){
  var Positionref = database.ref("/");
  Positionref.once("value",readOperator,showError);
  
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



function clear1(){
    clear();
  database.ref("/").set({
    paint00 : null

      })};


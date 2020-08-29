//Create variables here
var dog,happyDog,dogImg,happyDogImg,database,foodS,foodStock; 

function preload()
{
  //load images here
  dogImg = loadImage ("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,100,100);
  dog.addImage(dogImg);

  database = firebase.database();
  
  foodStock=databse.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
   background(46,139,87);

   if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogImg);
   }

   textSize(35)
        fill("white")
        text("Feed your dog by pressing UP_ARROW KEY" , width-300, 50)
    


  drawSprites();
  //add styles here

}

function readStock(data){
foodS - data.val();
}

function writeStock(x){

   if(x<=0){
     x=0;
    }else{
      x = x-1;
    }
    
    database.ref('/').update({foodS : x})
     

}


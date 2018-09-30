var startCenterX=400;
var startCenterY=300;
var offSetY=50;

var startLEyeX=330;
var startLEyeY=offSetY+300;

var startREyeX=470;
var startREyeY=offSetY+300;

var startSkullX=startCenterX;
var startSkullY=startCenterY+offSetY+60;

var startNoseX=startCenterX;
var startNoseY=startCenterY+offSetY+50;

var startJawX=startCenterX;
var startJawY=startCenterY+offSetY+150;
var endJawX=startCenterX;
var endJawY=startCenterY+offSetY+100;

var startFlowerX=startCenterX;
var startFlowerY=startCenterY+offSetY-200;

var lEyeAngleToRad=0;
var lEInc=0;

var skullAngleToRad=0;
var sInc=0;

var noseAngleToRad=0;
var nInc=0;

var jawAngleToRad=0;
var jInc=0;

var flowerAngleToRad=0;
var flowerAngleToRad2=0;
var fInc=0;

var ffAngleToRad=0;
var ffInc=0;

function preload(){
}

function setup() {
  createCanvas(800, 600);
  background(86,46,103);
}

function draw() {
var lEang = radians(lEyeAngleToRad);

var sAng = radians(skullAngleToRad);

var nAng = radians(noseAngleToRad);

var jAng = radians(jawAngleToRad);

var fAng = radians(flowerAngleToRad);
var fAng2 = radians(flowerAngleToRad2);

var ffAng = radians(ffAngleToRad);

var lEX = startLEyeX + (lEInc * cos(lEang));
var lEY = startLEyeY - (lEInc * sin(lEang));

var rEX = startREyeX + (lEInc * cos(lEang));
var rEY = startREyeY - (lEInc * sin(lEang));

var sX = startSkullX + (sInc * cos(sAng));
var sY = startSkullY - (sInc * sin(sAng));

var nX = startNoseX + (nInc * cos(nAng));
var nY = startNoseY - (nInc * sin(nAng));

var sJX = startJawX + (jInc * cos(jAng));
var sJY = startJawY - (jInc * sin(jAng));
var eJX = endJawX + (jInc * cos(jAng));
var eJY = endJawY - (jInc * sin(jAng));

var f1X = startFlowerX - (fInc * cos(fAng2));
var f1Y = startFlowerY + (fInc * sin(fAng2));
var f2X = startFlowerX - (fInc * sin(fAng2));
var f2Y = startFlowerY - (fInc * cos(fAng2));
var f3X = startFlowerX + (fInc * sin(fAng2));
var f3Y = startFlowerY + (fInc * cos(fAng2));
var f4X = startFlowerX + (fInc * cos(fAng2));
var f4Y = startFlowerY - (fInc * sin(fAng2));

var ff1X =  startFlowerX + (ffInc * 2.5 * sin(ffAng));
var ff1Y =  startFlowerY + (ffInc * cos(ffAng));
var ff2X =  startFlowerX - (ffInc * cos(ffAng));
var ff2Y =  startFlowerY + (ffInc * 2.5 * sin(ffAng));
var ff3X =  startFlowerX - (ffInc * 2.5 * sin(ffAng));
var ff3Y =  startFlowerY - (ffInc * cos(ffAng));
var ff4X =  startFlowerX + (ffInc * cos(ffAng));
var ff4Y =  startFlowerY - (ffInc * 2.5 * sin(ffAng));


stroke(0, 255 * sin(frameCount*0.5), 0 * sin(frameCount*0.5));
line(startLEyeX, startLEyeY, lEX, lEY);

stroke(0, 255 * sin(frameCount*0.5), 0 * sin(frameCount+0.5));
line(startREyeX, startREyeY, rEX, rEY);

stroke(241,75,157);
line(sX, sY, startSkullX, sY);

stroke(86,46,103);
line(nX, startNoseY, startNoseX, nY);

stroke(240, 233, 68);
line(startFlowerX, startFlowerY, f1X, f1Y);
line(startFlowerX, startFlowerY, f2X, f2Y);
line(startFlowerX, startFlowerY, f3X, f3Y);
line(startFlowerX, startFlowerY, f4X, f4Y);

//stroke(240, 233, 68);
stroke(330, 67, 75);
line(startFlowerX, startFlowerY, ff1X, ff1Y);
line(startFlowerX, startFlowerY, ff2X, ff2Y);
line(startFlowerX, startFlowerY, ff3X, ff3Y);
line(startFlowerX, startFlowerY, ff4X, ff4Y);



if(jawAngleToRad<=37 || jawAngleToRad>=145) {
  stroke(241,75,157);
  line(sJX, sJY, eJX, eJY);
}






if (skullAngleToRad<=180) {
    sInc += 6 * cos(sAng);
    skullAngleToRad += 1;

  }

if (jawAngleToRad<=180) {
  jInc += 7 * cos(jAng);
  jawAngleToRad += 2;
}
/*else {
  if (jawAngleToRad>=180) {
    jawAngleToRad=0;
  }
}*/
if(skullAngleToRad>=180 && flowerAngleToRad<=180) {
  fInc += 10 * cos(fAng);
  flowerAngleToRad += 8;
  flowerAngleToRad2 += 4;
}

if (skullAngleToRad>=180) {// && lEyeAngleToRad<=180
    lEInc += 4 * cos(lEang);
    lEyeAngleToRad += 2;
  }

if(skullAngleToRad>=180 && noseAngleToRad<=180){
    noseAngleToRad += 2;
    nInc += 3 * cos(nAng);
  }

  if (skullAngleToRad>=180 && ffAngleToRad<=180) {
      ffInc += 3 * cos(ffAng);
      ffAngleToRad += 6;
    }


}

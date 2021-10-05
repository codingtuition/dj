var song1="";
var song2="";
var song1status="";
varsong2status="";


function preload()
{
song1=loadSound("hp.mp3");
song2=loadSound("jb.mp3");
}

function setup()
{
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",getposes);
}

function draw()
{
image(video,0,0,600,500);
}

function modelloaded()
{
    console.log("posenet is initialized");
}

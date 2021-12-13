noseX="";
noseY="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
    jump=loadSound('jump.wav');
	char_die=loadSound('mariodie.wav');
	kick=loadSound('kick.wav');
	gameover=loadSound('gameover.wav');
	mario_coin=loadSound('coin.wav');
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameConsole");
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("model loaded");

}
function gotPoses(results){
	if (results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}

}
function draw() {
	
	game();
}







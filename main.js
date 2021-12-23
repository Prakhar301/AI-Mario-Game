function preload() {
	world_start = loadSound("world_start.wav");
	jump_sound=loadSound("jump.wav");
	coin_sound=loadSound("coin.wav");
	dier=loadSound("mariodie.wav");
	end=loadSound("gameover.wav");
	kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log("Model is Loaded");
}
function draw() {
	game();
}
function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
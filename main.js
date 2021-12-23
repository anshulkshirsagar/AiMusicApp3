song_1 = "";
song_2 = "";
left_wristX = 0;
left_wristY = 0;
right_wristX = 0;
right_wristY = 0;

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        console.log("left_wristX = " +left_wristX+ "left_wristY = " +left_wristY);

        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;
        console.log("right_wristX = " +right_wristX+ "right_wristY = " +right_wristY);
    }
}
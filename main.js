noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 500);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on('pose' , getPoses)
}

function draw(){
    background('#969A97')
    fill("#0000FF");
    stroke("#FF0000");
    square(noseX , noseY , difference);
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be = " + difference + "px";
}

function modalLoaded(){
    console.log('PoseNet Initiolized');
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}


difference=0
function setup() {
    canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.position(50, 90)
    canvas.position(700, 125)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x
        rightWristx = results[0].pose.rightWrist.x
        console.log(leftWristx, rightWristx)
        difference=Math.floor(leftWristx-rightWristx)
        document.getElementById("Note").innerHTML="font size is = "+difference
    }


}

function draw() {
    background("pink")
    textSize(difference)
    fill("black")
    text('Lenuka', 20, 200)
}


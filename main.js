Webcam.set({
width:350,
height: 300,
image_format : 'png',
png_quality:90
});

camera = document.getElementById("camera");


Webcam.attach('#camera' );


function take_snapshot()
{
    Webacam.snap(function(data_url) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}


console.log('ml5 version', ml5.version);
classfier = ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/J1X3V-4f1/model.json", modelLoaded);
function modelLoaded() {
console.log('Model Loaded!');
}

function check(){
img = document.getElementById('captured_image');
classfier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
 }
}
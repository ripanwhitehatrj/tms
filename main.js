var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie in 5 seconds")
        speak();
    }
}
function speak(){
 var synth=window.speechSynthesis;
 speak_data="taking your selfie in 5 seconds";
 var utter_this=new SpeechSynthesisUtterance(speak_data);
 synth.speak(utter_this);
 Webcam.attach(camera);
 setTimeout(function(){take_snapshot();
 save();
 },5000); 
}
camera=document.getElementsById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'svg',
    svg_quality:90
})
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
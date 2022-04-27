var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML= "";
    recognition.start();
}
recognition.onresult=function(evemt){
    console.log(event);
    var Content = evemt.results[0][0].transcript;
    console.log(Content);
    speak();
    document.getElementById("textbox").innerHTML= Content;
}
function speak(){
    var synth = window.speechSynthesi;
speak_data = document.getElementById("textbox").value;
var utterThus = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'pgn',
    pgn_quality:90
});
camera = document.getElementById("camera");

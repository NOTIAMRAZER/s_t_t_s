var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
}

function textToAudio() { 
    let msg = document.getElementById("text-to-speech").value; 
    let speech = new SpeechSynthesisUtterance(); 
    speech.lang = "en-US";
    speech.text = msg; 
    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = 1; 
    window.speechSynthesis.speak(speech);
}
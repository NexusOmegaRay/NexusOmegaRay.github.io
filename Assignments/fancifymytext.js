function alertCaller(){
    alert("Hello World");
}

function textResizer(){
    document.getElementById("textBox").style.fontSize = "1.5em"; 
}

function fancifier(){
    document.getElementById("textBox").style.fontWeight = "bold";
    document.getElementById("textBox").style.color = "blue";
    document.getElementById("textBox").style.textDecoration = "underline";
}

function boringinator(){
    document.getElementById("textBox").style.fontWeight = "normal";
    document.getElementById("textBox").style.color = "black";
    document.getElementById("textBox").style.textDecoration = "none";
}

function mooMachine(){
    var textInput = textBox.value;
    var bigTextInput = textInput.toUpperCase();
    textBox.value = bigTextInput;
    var parts = bigTextInput.split(".");
    textBox.value = parts.join("-Moo")
}

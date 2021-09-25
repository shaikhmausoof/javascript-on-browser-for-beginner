var btntranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#textinput");
var outputDiv = document.querySelector("#output");

function clickHandler (){
    outputDiv.innerText = textinput.value;
   
};

btntranslate.addEventListener("click", clickHandler)

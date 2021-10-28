var inputText = document.querySelector("#mainText");
var outputText = document.querySelector("#outputText");
var  btnError = document.querySelector("#btnInput");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.jso";


btnError.addEventListener( "click" , clickEvent);


function mainUrl(){

    return url+"?"+"text="+inputText.innerText;
}

function errorHandler(){
    outputText.innerText = "There is a error please try again!";
}

function clickEvent(){
    fetch(mainUrl())
    .then(response => response.json() )
    .then(json => console.log(json))
    .catch(errorHandler);

 

}
  

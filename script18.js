// https://jsonplaceholder.typicode.com/todos/1
// Fetch the Api and show the title on the browser window

var outputText = document.querySelector("#output");
var btnClick = document.querySelector("#click");
var redBtn = document.querySelector("#red");
var blueBtn = document.querySelector("#blue");
var greenBtn = document.querySelector("#green");
var url = "https://jsonplaceholder.typicode.com/todos/1";

function responseChecker(){
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        outputText.innerText = json.title;

    } );
}

function colorGiver(Color){
    outputText.style.color = Color;
    console.log();
}

redBtn.addEventListener("click", ()=> colorGiver("red"));
blueBtn.addEventListener("click", ()=> colorGiver("blue"));
greenBtn.addEventListener("click", ()=> colorGiver("green"));


btnClick.addEventListener("click", responseChecker)
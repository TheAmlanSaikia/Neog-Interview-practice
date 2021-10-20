// var inputText = document.querySelector("#textInput");
var outputText = document.querySelector("#finalText");
var plusBtn = document.querySelector("#increaseText");
var minusBtn = document.querySelector("#decreaseText");


 let number = 18.72;
 plusBtn.addEventListener("click", ()=>{
    number += 2;
    outputText.style.fontSize = `${number}px`;
    
    

 })

 minusBtn.addEventListener("click", ()=>{
    number -= 2;
    outputText.style.fontSize = `${number}px`;
    
}
)
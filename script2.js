// var inputText = document.querySelector("#textInput");
var outputText = document.querySelector("#finalText");
var plusBtn = document.querySelector("#increaseText");
var minusBtn = document.querySelector("#decreaseText");


let number = 2;
plusBtn.addEventListener("click", ()=>{

    outputText.style.fontSize = `${number}px`;
    number += 2;

})

minusBtn.addEventListener("click", ()=>{

    outputText.style.fontSize = `${number}px`;
    number -= 2; 
}
)
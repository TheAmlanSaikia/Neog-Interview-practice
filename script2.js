var inputText = document.querySelector("#textInput");
var outputText = document.querySelector("#finalText");
var plusBtn = document.querySelector("#increaseText");
var minusBtn = document.querySelector("#decreaseText");


function outputFunction(){
   outputText.innerText = inputText.value;
}

function increasedFont(){
   number += 2;
   outputText.style.fontSize = `${number}px`;
}

function decreaseFont(){
   number -= 2;
   outputText.style.fontSize =`${number}px`
}

 let number = 18.72;
 plusBtn.addEventListener("click", ()=>{
    outputFunction();
    increasedFont();

   })

 minusBtn.addEventListener("click", ()=>{
    outputFunction();
    decreaseFont();    
}
)
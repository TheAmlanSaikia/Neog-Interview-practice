// var inputText = document.querySelector("#input");
// var outputText = document.querySelector("#outputText");
// var clickBtn = document.querySelector("#clickBtn");

// var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

// function convertFunction(){
//     fetch(url)
//     .then(response => response.json())
//     .then(json => 
//         {
//             var value =  json.usd.inr;
//             outputText.innerText = `The currency amonut will be ${inputText.value*value.toFixed(3)}`
        
        
//         }
//         )


// }



// clickBtn.addEventListener("click", convertFunction);





// var inputText = document.querySelector("#input");
// var btnError = document.querySelector("#btnRed");
// var btnWarn = document.querySelector("#btnYellow");
// var btnSuccess = document.querySelector("#btnGreen");
// var output = document.querySelector("div");

// function outputFunction(){
//     output.innerText = inputText.value;
// }

// function mainFunction (colorValue){
//     output.style.color = colorValue;
// }


// inputText.addEventListener("input", outputFunction);
// btnError.addEventListener("click", ()=> mainFunction("red"));
// btnWarn.addEventListener("click", ()=> mainFunction("yellow"));
// btnSuccess.addEventListener("click", ()=> mainFunction("green"));






// var inputText = document.querySelector("#input");
// var output = document.querySelector("#outputText");
// var btnGood = document.querySelector("#GoodM");
// var btnAfter = document.querySelector("#GoodA");
// var btnNight = document.querySelector("#GoodN");
// var bodyElement = document.querySelector("body");

// btnGood.addEventListener("click", ()=>{
//     output.innerText = `${btnGood.innerText}${inputText.value}`;
//     bodyElement.style.backgroundColor = "red";

// })

// btnAfter.addEventListener("click", ()=>{
//     output.innerText = `Good AfterNoon, ${inputText.value}`;
//     bodyElement.style.backgroundColor = "yellow"; 
// })

// btnNight.addEventListener("click", ()=>{
//     output.innerText = `Good Night, ${inputText.value}`
//     bodyElement.style.backgroundColor ="blue"
// })
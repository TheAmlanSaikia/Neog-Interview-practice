// var addBtn = document.querySelector("#plus");
// var minusBtn = document.querySelector("#minus");
// var output = document.querySelector("#output");

// var value = 0;

// function outputText(){
//     output.innerText = value;
// }

// addBtn.addEventListener("click", ()=>{
//     value += 1;
//     outputText();
// })

// minusBtn.addEventListener("click", ()=>{
//     value -= 1;
//     outputText();
// })


// Question 2




var inputText = document.querySelector("#input");
var btnClick = document.querySelector("#click");
var output = document.querySelector("h3");

 btnClick.disabled = true;
inputText.addEventListener("input", ()=>{
 
    if(inputText.value.length > 0){
        btnClick.disabled = false;
    }

})
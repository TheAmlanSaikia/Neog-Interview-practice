var inputStr = document.querySelector("#inputStr");
var mainText = document.querySelector("#mainText");
var redBtn = document.querySelector("#redBtn");
var greenBtn = document.querySelector("#greenBtn");
var blueBtn = document.querySelector("#blueBtn");

function outputStr(){
 mainText.innerText = inputStr.value;
}

redBtn.addEventListener("click", ()=>{
    outputStr();
    mainText.style.color = 'red';
});

greenBtn.addEventListener("click", ()=>{
    outputStr();
    mainText.style.color = 'green';
})


blueBtn.addEventListener("click", ()=>{
    outputStr();
    mainText.style.color = 'blue';
})
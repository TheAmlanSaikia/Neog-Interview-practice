var mainText = document.querySelector("#mainText");
var redBtn = document.querySelector("#redBtn");
var greenBtn = document.querySelector("#greenBtn");
var blueBtn = document.querySelector("#blueBtn");

redBtn.addEventListener("click", ()=>{
   
    mainText.style.color = 'red';
});

greenBtn.addEventListener("click", ()=>{

    mainText.style.color = 'green';
})


blueBtn.addEventListener("click", ()=>{

    mainText.style.color = 'blue';
})
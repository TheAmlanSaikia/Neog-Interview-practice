var answerValue = document.querySelectorAll(".numbervalue");
var addBtn = document.querySelector("#addition");
var subtractBtn = document.querySelector("#subtraction");
var multiplyBtn = document.querySelector("#multiplication");
var divBtn = document.querySelector("#divison");
var outputTxt = document.querySelector(".answer");

function addFun(){
     outputTxt.innerText = (Number(answerValue[0].value)+Number(answerValue[1].value));
}

function subtractFun(){
    outputTxt.innerText = (Number(answerValue[0].value)-Number(answerValue[1].value));
}


function multiplyFun(){
    outputTxt.innerText = (Number(answerValue[0].value)*Number(answerValue[1].value));
}


function divFun(){
    outputTxt.innerText = (Number(answerValue[0].value)/Number(answerValue[1].value));
}


addBtn.addEventListener("click", addFun)


subtractBtn.addEventListener("click", subtractFun)


multiplyBtn.addEventListener("click", multiplyFun)


divBtn.addEventListener("click", divFun)


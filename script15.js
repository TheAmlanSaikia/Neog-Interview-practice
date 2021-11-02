var btnInput = document.querySelector("#btnClick");
var outputText = document.querySelector("#outputText");

var ramData = {
    name: "Ram",
    power: 2500,
    yuga: "Treta",

}

var krishnaData = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar",
}

btnInput.addEventListener("click", powerComparison);

function powerComparison(){
    if(ramData.power > krishnaData.power){
        outputText.innerText = `${ramData.name} is greater`;
    } else{
        outputText.innerText = `${krishnaData.power} is greater`;
    }
}
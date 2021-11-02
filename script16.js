var inputBtn = document.querySelector("#btnClick");
var outputText = document.querySelector("#output");

var ramData = {
    name: "Ram",
    power: 2500,
    yuva : "Treta",
};


var krishnaData = {
    name: "Krishna",
    power: 2325,
    yuva: "Dwapar"
}


inputBtn.addEventListener("click", powerComparison);


function powerComparison(){
 if(ramData.name.length*35+ramData.power > krishnaData.name.length*35+krishnaData.power ){
     outputText.innerText = `${ramData.name} is more powerful`;
 }else{
    outputText.innerText = `${krishnaData.name} is more powerful`;
 }
}


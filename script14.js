var inputBtn = document.querySelector("#inputBtn");
var outputTxt = document.querySelector("#outputText");

var objectOne = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
    
}

var objectTwo = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}

inputBtn.addEventListener("click", ageComparison)


function ageComparison (){

     if(objectOne.age < objectTwo.age){
        outputTxt.innerText = `${objectTwo.name} is more older`
    } else { 
          outputTxt.innerText =`${objectOne.name} is more older`
        
    }
}
    

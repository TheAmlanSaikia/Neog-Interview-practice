
// counter 10, input something counter decrease, remove input counter++,  less than 0, counter value red

var inputText = document.querySelector("#inputName");
var output = document.querySelector("#outputText");

var counter = 10;

inputText.addEventListener("input", ()=>{

    var value = inputText.value.length;
    var upDate = counter - value;
    
    output.innerText = `Counter:${upDate}`;
    if(upDate<0){
        output.style.color = "red";
    } else{
        output.style.color = "black";
    }

})




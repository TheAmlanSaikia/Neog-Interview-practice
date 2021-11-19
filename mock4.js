var input = document.querySelector("#input");
var output = document.querySelector("#output");
var click = document.querySelector("#click");




input.addEventListener("input", checkUser)

function checkUser(){
    switch(input.value){
        case "Tanvi": output.innerText = "She is the best CEO ever!"; break;
        case "Tanay": output.innerText = "He is our FUNNY mentor!"; break;
        case "Swapnil" : output.innerText = "He helps us CONQUER jobs!"; break;
        case "Akanksha": output.innerText ="She is our CHEERFUL Interviewer!"; break;
        default: output.innerText = "Input Failed";
    }
}

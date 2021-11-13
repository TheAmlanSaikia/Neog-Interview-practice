var inputText = document.querySelector("#input");
var passwordText = document.querySelector("#passwordId");
var outputText = document.querySelector("#outerText");
var checkBtn = document.querySelector("#checkBtn");


var dataBase = [
    {
        Name: "Amlan",
        Password: 1234,
    },

    {
        Name: "Raj",
        Password: 54321,
    },

    {
        Name: "Ankur",
        Password: 09876,
    }
]

function toCheckdata(){
    
  
   
    for(var i=0; i<dataBase.length; i++){
        console.log(dataBase[i].Name , dataBase[i].Password);
        if( inputText.value == dataBase[i].Name && passwordText.value == dataBase[i].Password){
            outputText.innerText = "success";
               break;
        } else outputText.innerText = "Fail";

    }

   
}



checkBtn.addEventListener("click", toCheckdata)
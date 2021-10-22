var textInput = document.querySelector("#inputText");
var mainText = document.querySelector("#mainText");
var firstBtn = document.querySelector("#firstOne");
var secondBtn = document.querySelector("#secondOne");
var thirdBtn = document.querySelector("#thirdOne");

firstBtn.addEventListener("click", ()=>{ 
    
    var textValue = textInput.value; 

    mainText.innerHTML = `<h1> ${textValue}</h1>`;

  
}
)

secondBtn.addEventListener("click" , ()=>{ 

       var textValue = textInput.value;

    mainText.innerHTML = `<h2> ${textValue}</h2>`;

}
)


thirdBtn.addEventListener("click", ()=>{

        var textValue = textInput.value;
        
        mainText.innerHTML = `<h3> ${textValue}</h3>`
} )

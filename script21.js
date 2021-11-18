var userName = document.querySelector("#input1");
var message = document.querySelector("#input2");
var outputText = document.querySelector("#output1");
var btnClick = document.querySelector("#click");

btnClick.disabled = true;



userName.addEventListener("input",()=>{
  
    btnClick.disabled = false;

    if(message.value.length === 0){
        btnClick.disabled = true;
    }



})


message.addEventListener("input", ()=>{
    btnClick.disabled = false;

    
    if(userName.value.length === 0){
        btnClick.disabled = true;
    }
} )



btnClick.addEventListener("click", ()=>{

    var newPara = document.createElement("p");
    newPara.innerText = `${userName.value}:${message.value}`; 
    document.body.appendChild(newPara);

    

})

// Create two inputs ( One for username & One for message ) & a button. Upon clicking the button it should print the message as if it's a real-time chat application.






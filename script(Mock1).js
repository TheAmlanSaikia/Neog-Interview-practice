var inputText = document.querySelector("#input");
var output = document.querySelector("#output");
var btnClick = document.querySelector("#check");


inputText.addEventListener("input", ()=>{
    if(inputText.value.length < 10){
        btnClick.disabled = true;
    } else{
        btnClick.disabled = false;
    }
})

btnClick.addEventListener("click", ()=>{
    if(inputText.value.length > 9 ){
        btnClick.disabled = false;
        output.innerText = "Success!";
    }else{
        output.innerText = "Fail!";
        
    }
})
// var costInput = document.querySelector("#cost");
// var currentInput = document.querySelector("#current");
// var output = document.querySelector("#output");
// var btnClick = document.querySelector("#toCheck");

// btnClick.addEventListener("click", ()=>{
//     if(Number(costInput.value) < Number(currentInput.value)){
//      console.log(typeof(costInput.value));
//      output.innerText = `Profit, Profit amount:${Number(currentInput.value)-Number(costInput.value)}`;
//     } else{
//         output.innerText = `Loss, loss amount:${Number(currentInput.value)-Number(costInput.value)}`;
//     }
// })



var click = document.querySelector("#click");
var input = document.querySelector("#name");
var output = document.querySelector("#output");
var otpField = document.querySelector("#otp");
var btnValidate = document.querySelector("#validate");
var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

click.addEventListener("click",()=>{
    fetch(url+input.value)
    .then(res => res.json())
    .then(json => {
        output.innerText = json.otp;
        btnValidate.addEventListener("click", ()=>{
            if(otpField.value === json.otp){
                output.innerText ="Success";
                output.style.color = "red";
            } else{
                output.innerText = "Fail";
                output.style.color = "green";
            }
        })
        
    })
    
} )
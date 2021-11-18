// 5. https://otpgenerator.ishanjirety.repl.co/](https//OTPGenerator.ishanjirety.repl.co)
// we have been given an api now we have to fetch this API (name to be added in string) then we will get an otp.. after getting an otp we just have to verify if it's correct otp..
// https://OTPGenerator.ishanjirety.repl.co/get-otp?name="amlan"

var inputName = document.querySelector("#userName");
var btnClick = document.querySelector("#click");
var otpInput = document.querySelector("#inputText");
var otpChecker = document.querySelector("#check");
var outputText = document.querySelector("#output");
var url = "https://OTPGenerator.ishanjirety.repl.co/get-otp?name=";



function getUrl(){
  
    return (url+inputName.value);
}

function otpFetcher(){
    fetch(getUrl())
    .then(res => res.json())
    .then(json => {
        var otpValue = json.otp;
        outputText.innerText = json.otp;
        otpChecker.addEventListener("click", ()=>{
            if(otpInput.value === otpValue){
                outputText.innerText = "Succed";
            }else 
               outputText.innerText = "Failed";
        })
    }
    
    )}

btnClick.addEventListener("click", otpFetcher);

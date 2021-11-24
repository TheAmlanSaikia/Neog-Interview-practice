var input = document.querySelector("#input");
var BtnClick = document.querySelector("#click");
var output = document.querySelector("#output");
var url = "https://json-list.ishanjirety.repl.co/verification-code?name=";

BtnClick.addEventListener("click", ()=>{
    fetch(url+input.value)
    .then(res => res.json())
    .then(json => {
      output.innerText = json.verificationCode;
    })
})
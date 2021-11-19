var outputText = document.querySelector("#output");
var clickIncrease = document.querySelector("#plus");
var clickDecrease = document.querySelector("#minus");
var url =  "https://quick-access-api.desaihetav.repl.co/"
var size = 1;
clickIncrease.addEventListener("click", ()=>{
    size += 5;
    outputText.style.border = "5px solid";
    console.log(size);  
})


clickDecrease.addEventListener("click", ()=>{
    size +=10;
    outputText.style.border = `${size}px solid`;
    console.log(size);
    fetch(url)
    .then(res => res.json())
    .then(json => {
        outputText.innerText = json.message+json.success;
    })
})
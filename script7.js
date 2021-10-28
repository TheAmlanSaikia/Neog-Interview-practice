var inputText = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");
var btnInput = document.querySelector("#btnText");
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


btnInput.addEventListener("click", clickEvent)

function mainUrl(){
    return url+"?"+"text="+inputText.innerText;
}

function clickEvent(){

    fetch(mainUrl())
    .then(response => response.json())
    .then(json =>{
        var usefulInput = json.contents.translated;
         outputText.innerText = usefulInput.toUpperCase();
        
    })

}


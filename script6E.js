var inputText = document.querySelector("#textInput");
var btnLoaded = document.querySelector("#btnInput");

btnLoaded.addEventListener("click", () => {
    if( inputText.style.display !== "none"){
        inputText.style.display = "none";
    } else {
        inputText.style.display = "block";
    }
})
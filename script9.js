var textInput = document.querySelector("#mainInput");
var textOutput = document.querySelector("#outputText");
var btnClick = document.querySelector("#btnInput");

// var url = " https://unitube-server.herokuapp.com/playlists";
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"; 
// var url = "https://jsonplaceholder.typicode.com/dummyUsers";

btnClick.addEventListener("click", getLink);

    

function getLink(){

    fetch(url)
    .then( (response) => {
        if(response.status === 404){
            throw Error("Page not found")
        }
        if(response.status === 401){
            throw Error("You are not logged in");
        }
        return response.json();
    }) 
    .then((json) => {
        outputText.innerText = `${JSON.stringify(json)}`; 
    } )
    .catch((err) => {
        outputText.innerText = `${err.message}`;
    })


}



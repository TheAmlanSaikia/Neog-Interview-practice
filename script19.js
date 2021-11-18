var btnClick = document.querySelector("#input");
var outputText = document.querySelector("#output");
var url ="https://mystery-api.kushanksriraj.repl.co/get";

btnClick.addEventListener("click", ()=>{
    fetch(url)
    .then(response => {
        if( response.status ===  404){
            outputText.innerText = "Page Not Found";
            console.log("click");

        }else if( response.status === 401){
            outputText.innerText = "Not Logged In";
            console.log("error");
        }else{
            outputText.innerText = "Success";
            return response.json()
        }
    })
    // .then(json => {
    //     console.log(json);
    // })
})



// Interact, Conceptual


// 404 pAGE NOT FOUND
// 401   NOT LOGED IN
// 200  Sucesss

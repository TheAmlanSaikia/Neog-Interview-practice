// var input = document.querySelector("#input");
// var redBtn = document.querySelector("#error");
// var output = document.querySelector("h3");


// redBtn.addEventListener("click",()=>{
//     console.log("click");
//     output.innerHTML = `<h3 style="color:red;">${input.value}</h3>`;
// })




// Create a web app, where I input my name, and then I input a password.
// If the password contains the input name in it, show an error message "Password can't have name"

var inputText = document.querySelector("#inputName");
var password = document.querySelector("#password");
var btnClick = document.querySelector("#check");
var output = document.querySelector("div");


btnClick.addEventListener("click", ()=>{
    
    if(password.value === inputText.value){
        console.log("Hellol");
        output.innerText = "Passwod Can't have name";
    } else{
        output.innerText = "Success";
    }
})

// 1. Here are some pre-determined users - 
// username - yash
// password - yash123,
// username - mohit
// password - mohit123,
// username - tanay
// password - tanay456

// Have two input fields for the username & password respectively, check with pre-determined data to match the credentials. If they match show "SUCCESS" otherwise show "ERROR" messages in green & red color respectively. Optimize the code as much as you can.


var usernameText = document.querySelector("#input");
var passwordText = document.querySelector("#password");
var outputText = document.querySelector("#output");
var btnClick = document.querySelector("#check");


var arrayObject = [
{
    username: "yash",
    password : "yash123"
},

{   username : "mohit",
    password : "mohit123"
},

{
    username :"tanay",
    password :"tanay456"
},

]

checkFunction =()=>{
    for(var i=0; i<arrayObject.length; i++){
        if(arrayObject[i].username === usernameText.value && arrayObject[i].password === passwordText.value){
            outputText.innerText = "Success";
            outputText.style.color="green";
            break;
        }else{
            outputText.innerText = "Validation Failed";
            outputText.style.color="red";
        }
    }
}




btnClick.addEventListener("click", checkFunction);
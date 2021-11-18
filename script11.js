var passwordInput = document.querySelector("#inputPassword");
var btnClick = document.querySelector("#btnPassword");
var outputText = document.querySelector("#outputText");

// btnClick.disabled = true;

btnClick.addEventListener("click", ()=> {
    
    // if (passwordInput.value.length < 10)
    //     outputText.innerText = `Error:Your Password ${passwordInput.value} is invalid!`;
    // else outputText.innerText = "Success!!!"


    //   if(passwordInput.value.length < 4){
    //        btnClick.disabled= true;
    //        outputText.innerText = "Error"
    //   } else {
    //       btnClick.disabled = false;
    //   outputText.innerText = "Success!!";
    //   }
    
     console.log(typeof(passwordInput.value));
    
    if( passwordInput.value.length < 5){
        passwordInput.style.borderColor = "red";
        outputText.innerText = "Error";

    } else{
        passwordInput.style.borderColor = "green";
        outputText.innerText = "sucess!!"
    }

})
// var passwordOne =  document.querySelector("#password1");
// var passwordTwo = document.querySelector("#password2");
// var btnClick = document.querySelector("#validate");
// var outputText = document.querySelector("#output");

// btnClick.addEventListener("click", ()=>{
//     if(passwordOne.value === passwordTwo.value){
//         outputText.innerText = "Success";
//     }else if(passwordOne.value ==="" || passwordTwo.value ==="" ){
//         outputText.innerText = "Enter the required passwords";
//     }else{
//         outputText.innerText = "validation Failed";
//     }
// })




var arrayOfObjects = [
    {
        Task: "sing",
        Status: true, 
    },

    {
     
        Task: "dance",
        Status: false,
    },

    {
        Task: "pet",
        Status: true,
    }
]

var btnClick = document.querySelector("#click");
var outputText = document.querySelector("#output");

btnClick.addEventListener("click", ()=>{
    for(var i=0; i<arrayOfObjects.length; i++){
        if(arrayOfObjects[i].Status == true ){
            var newdata = document.createElement("p");
            newdata.innerText = arrayOfObjects[i].Task;
            document.body.appendChild(newdata);
        }
    }
})
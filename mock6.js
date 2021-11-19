// var btnCheck = document.querySelector("#btnClick");
// var outputText = document.querySelector("#output");
// var url ="https://jsonplaceholder.typicode.com/todos";

// btnCheck.addEventListener("click", ()=>{
//     fetch(url)
//     .then( res => res.json())
//     .then(json => {
//         for(var i=0; i<json.length;i++){
//          var newpara = document.createElement("p");
//          newpara.innerText = json[i].title;
//          document.body.appendChild(newpara);

//         }
//         }
// );
// })

var inputNum = document.querySelector("#inputNumber");
var btnClick = document.querySelector("#check");

btnClick.addEventListener("click",()=>{

 var squareValue = inputNum.value**2;
 if(squareValue%10 === (Number(inputNum.value))){
     console.log(`${inputNum.value} is automorphic number`);
 } else{
     console.log(`${inputNum.value} is not a automorphic number`);
 }

})



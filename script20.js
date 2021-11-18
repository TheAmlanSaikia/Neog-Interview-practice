//  This is an API which sends 3 image links as a response https://dog.ceo/api/breeds/image/random/3. Add a button to your screen that when clicked shows those 3 images returned by the API

var btnClick = document.querySelector("#click");
var url ="https://dog.ceo/api/breeds/image/random/3";
var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");


btnClick.addEventListener("click", ()=>{

 fetch(url)
 .then(res => res.json())
 .then( json => {
     div1.innerHTML = `<img src= ${json.message[0]}></img>`;
     div2.innerHTML = `<img src= ${json.message[1]}></img>`;
     div3.innerHTML = `<img src=${json.message[2]}</img>`;
 })

})

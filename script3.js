var mainText = document.querySelector("#mainText");
var firstBtn = document.querySelector("#firstOne");
var secondBtn = document.querySelector("#secondOne");
var thirdBtn = document.querySelector("#thirdOne");


firstBtn.addEventListener("click" , ()=>{ 
    mainText.innerHTML = `<h1> ${mainText.textContent}</h1>`;

}
)

secondBtn.addEventListener("click" , ()=>{ 
    mainText.innerHTML = `<h2> ${mainText.textContent}</h2>`;

}
)


thirdBtn.addEventListener("click", ()=>{
        mainText.innerHTML = `<h3> ${mainText.textContent}</h3>`
} )

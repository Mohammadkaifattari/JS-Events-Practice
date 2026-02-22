// let inputfile = document.querySelector("#fi")

// let btn =document.querySelector("#btn")

// window.addEventListener("click", function(){
//     inputfile.click();
    

// })

// inputfile.addEventListener("change", function (del) {
//     let file = del.target.files[0]
//     if (file) {
//     btn.textContent = file.name;
     
//     }
    
// })



// let form = document.querySelector("form");
// form.addEventListener("submit", function (del){

//     del.preventDefault();
// let inputs = document.querySelectorAll("input")


//  let main = document.querySelector("main")
 
//  main.classList.add('card')

 
//  let profile = document.createElement("div")
//  profile.classList.add("profile")
//  let img = document.createElement("img")
//  img.setAttribute("src",inputs[0].value)
// profile.appendChild(img)


// let h3 = document.createElement("h3")
// h3.textContent = inputs[1].value


// let h4 = document.createElement("h4")
// h4.textContent = inputs[2].value


// let p = document.createElement("p")
// p.textContent = inputs[3].value
    

// main.appendChild(profile)
// main.appendChild(h3)
// main.appendChild(h4)
// main.appendChild(p)


// inputs.forEach(function (inp) {
// if (inp.type !== "submit") {
//     inp.value = ""
    
// }
// })
// })
 
let abcd = document.querySelector("#abcd")

window.addEventListener("mousemove" , function (detls) {
    console.log(detls)
    let yval = abcd.style.top = detls.clientY - 50+ "px"
     let xval = abcd.style.left = detls.clientX - 50 + "px"
    
})
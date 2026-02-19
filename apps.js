let inputfile = document.querySelector("#fi")

let btn =document.querySelector("#btn")

window.addEventListener("click", function(){
    inputfile.click();
    

})

inputfile.addEventListener("change", function (del) {
    let file = del.target.files[0]
    if (file) {
    btn.textContent = file.name;
     
    }
    
})
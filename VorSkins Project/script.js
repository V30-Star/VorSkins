
const form = document.getElementById("form")
var nameInput=document.getElementById('name')
const email = document.getElementById('email')
var errornode = document.getElementsByClassName('error');
var number = document.getElementById('number')
var berhasil = document.getElementById('berhasil')
const message = document.getElementById('message')

function validateForm(){
    clearMesage();
    let errorpenanda= false
    if(nameInput.value.length<1){
        console.log("hello")
        errornode[0].innerText ="Name cannot be blank"
        nameInput.classList.add("error-border")
        errorpenanda=true;
    }
    if(!emailIsValid(email.value)){
        errornode[1].innerText="Invalid email address";
        email.classList.add("error-border");
        errorpenanda=true;
    }

    if(!Number.isNaN(number) && number.value.length<7){
        errornode[2].innerText="Please enter phone number";
        number.classList.add("error-border")
        errorpenanda=true
    }
    if(message.value.length<1){
        errornode[3].innerText="Please enter message";
        message.classList.add("error-border")
        errorpenanda=true
    }
    if(!errorpenanda){
        berhasil.innerText="Success!"
    }
}

function clearMesage(){
    for(let i=0;i<errornode.length;i++){
        errornode[i].innerText= "";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    number.classList.remove("error-border")
    message.classList.remove("error-border")
}
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

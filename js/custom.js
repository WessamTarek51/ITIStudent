// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var h = header.offsetTop;

// Add the sticky 
function myFunction() {
  if (window.pageYOffset > h) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//Get data
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phone = document.querySelector("#phoneNumber");
const massage = document.querySelector("#massage");
const success = document.querySelector("#success");
const errorr = document.querySelectorAll(".error");


//valitdate data
function validateForm(){

    clearMassage();
    let flag= false;
if(nameInput.value.length<1){
    errorr[0].innerHTML="A name is required";
    nameInput.classList.add("error");
    flag=true;
}
if(!emailIsValid(emailInput.value)){
    errorr[1].innerHTML=" An email is required";
    emailInput.classList.add("error");
    flag=true;
}
if(phone.value.length<11){
    errorr[2].innerHTML="A phone number is required";
    phone.classList.add("error");
    flag=true;
}
if(massage.value.length<1){
    errorr[3].innerHTML="A massage  is required";
    massage.classList.add("error");
    flag=true;
}
if(!flag){
    success.innerText = "success!!!!!!";
}
}

//clear error
function clearMassage(){
for(let i=0; i<errorr.length;i++){
    errorr[i].innerHTML ="";
}
nameInput.classList.remove("error");
emailInput.classList.remove("error");
phone.classList.remove("error");
massage.classList.remove("error");


}

//check email vaild @
function emailIsValid(email){
    let x = /\S+@\S+\.\S+/;
    return x.test(email);
}
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const menuLink1 = document.querySelector(".navbar__item1");
const menuLink2 = document.querySelector(".navbar__item2");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

menuLink1.addEventListener("click", closeMenu1);
menuLink2.addEventListener("click", closeMenu2);

function closeMenu1() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

function closeMenu2() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

//ELEMENTS/////////////////////////////////////////////////////////////////////////////////////
let inputEmail = document.querySelector("#email");
let btnSubmit = document.querySelector("#btnSubmit");

let message = document.querySelector("#email-message");

//EVENTS///////////////////////////////////////////////////////////////////////////////////////

btnSubmit.addEventListener("click", confirmEmail);
inputEmail.addEventListener("change", enableBtn);

enableBtn();

//FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////

function enableBtn() {
  if (inputEmail.value === "") {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
    btnSubmit.style.background = "#3895ea";
  }
}

function confirmEmail() {
  inputEmail.style.display = "none";
  btnSubmit.style.display = "none";
  message.style.opacity = 1;
}

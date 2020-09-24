var modalLogin=document.querySelector(".login-page");
var loginButton=document.querySelector(".button--login");
var closeButton=modalLogin.querySelector(".close-button");
var loginForm=modalLogin.querySelector(".login-page__form");
var loginField=loginForm.querySelector(".login-page__input--login");
var passwordField=loginForm.querySelector(".login-page__input--password");
var isStorageSupport=true;
var login="";

function closeModal(modal){
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
}

try{
  login=localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.add("modal-show");
  if (isStorageSupport){
    if(login) {
      loginField.value = login;
      passwordField.focus();
    }
    else loginField.focus();
  }
  else {
    loginField.focus();
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginField.value || !passwordField.value){
    evt.preventDefault();
    modalLogin.classList.remove("modal-error");
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport){
      localStorage.setItem("login", loginField.value);
    }
  }
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModal(modalLogin);
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape"){
    if (modalLogin.classList.contains("modal-show")){
      evt.preventDefault();
      closeModal(modalLogin);
    }
  }
});

var modalLogin=document.querySelector(".login-page");
var loginButton=document.querySelector(".button--login");
var loginCloseButton=modalLogin.querySelector(".login-page__close");
var loginForm=modalLogin.querySelector(".login-page__form");
var loginField=loginForm.querySelector(".login-page__input--login");
var passwordField=loginForm.querySelector(".login-page__input--password");
var isStorageSupport=true;
var login="";
var modalMap=document.querySelector(".map-page");
var showMapButton=document.querySelectorAll(".map-link");
var mapCloseButton=modalMap.querySelector(".map-page__close");
var blocker=document.querySelector(".blocker");

function showModal(modal, blocker){
  modal.classList.add("modal-show");
  blocker.classList.add("blocker-show");
}

function closeModal(modal, blocker){
  modal.classList.remove("modal-show");
  blocker.classList.remove("blocker-show");
}

try{
  login=localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  showModal(modalLogin, blocker);
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

loginCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModal(modalLogin, blocker);
  modalLogin.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape"){
    if (modalLogin.classList.contains("modal-show")){
      loginCloseButton.dispatchEvent(new MouseEvent("click"));
    }
    if (modalMap.classList.contains("modal-show")){
      mapCloseButton.dispatchEvent(new MouseEvent("click"));
    }
  }
});

showMapButton.forEach(function (mapButton) {
  mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    showModal(modalMap, blocker);
  });
});

mapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModal(modalMap, blocker);
});

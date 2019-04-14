var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var dateInput = document.getElementById("date");
var numberInput = document.querySelector("#number");
var submit = document.querySelector(".gold");
var darkScroll = document.querySelector(".dark");
var whiteScroll = document.querySelector(".white");

submit.addEventListener("click", reserveTable);
darkScroll.addEventListener("click", scrollToRes);
whiteScroll.addEventListener("click", scrollToMenu);

function reserveTable() {
  var name = nameInput.value;
  var email = emailInput.value;
  var date = dateInput.value;
  var number = numberInput.options[numberInput.selectedIndex].value;

  alert("Thank you for your reservation!\nWe will be expecting you on " + date + " with a party of " + number)
}

function scrollToRes() {
  window.location.href="#reservations";
}

function scrollToMenu() {
  window.location.href="#menu";
}
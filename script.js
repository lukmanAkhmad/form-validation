const form = document.querySelector("#form-field");
const inputEmail = document.querySelector("#email");
const errorMessageEmail = document.querySelector(".error-message-email");
const btnSubmit = document.querySelector("#btn-submit");

inputEmail.addEventListener("input", () => {
  console.log("input");
  if (inputEmail.validity.valid) {
    errorMessageEmail.textContent = "";
  } else {
    showErrorInputEmail();
  }
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputEmail.validity.valid) {
    showErrorInputEmail();
  }
});

function showErrorInputEmail() {
  if (inputEmail.validity.valueMissing) {
    errorMessageEmail.textContent = "You need enter an email address.";
  } else if (inputEmail.validity.typeMismatch) {
    errorMessageEmail.textContent =
      "Entered value needs to be an email address.";
  }
}

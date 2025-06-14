const form = document.querySelector("#form-field");
const inputEmail = document.querySelector("#email");
const errorMessageEmail = document.querySelector(".error-message-email");
const btnSubmit = document.querySelector("#btn-submit");
const countryField = document.querySelector("#country");
const postalCodeField = document.querySelector("#postal-code");
const errorMessagePostalCode = document.querySelector(
  ".error-message-postal-code"
);

function checkEmail() {
  if (inputEmail.validity.valid) {
    errorMessageEmail.textContent = "";
  }

  if (inputEmail.validity.valueMissing) {
    errorMessageEmail.textContent = "You need enter an email address.";
  } else if (inputEmail.validity.typeMismatch) {
    errorMessageEmail.textContent =
      "Entered value needs to be an email address.";
  }
}

function checkPostalCode() {
  let errorMessage = `You need to enter ${countryField.value} postal code.`;

  const constraints = {
    Indonesia: [
      "^\\d{5}$",
      "Indonesia postal codes must have exactly 5 digits: e.g. 10110",
    ],
    French: [
      "^(F-)?\\d{5}$",
      "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    German: [
      "^(D-)?\\d{5}$",
      "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
  };

  const constraint = new RegExp(constraints[countryField.value][0], "");

  if (postalCodeField.value === "") {
    errorMessagePostalCode.textContent = errorMessage;
  } else if (constraint.test(postalCodeField.value)) {
    errorMessagePostalCode.textContent = "";
  } else {
    errorMessagePostalCode.textContent = constraints[countryField.value][1];
  }
}

inputEmail.addEventListener("input", checkEmail);
countryField.addEventListener("change", checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputEmail.validity.valid) {
    checkEmail();
    checkPostalCode();
  }
});

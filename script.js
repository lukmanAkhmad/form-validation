const form = document.querySelector("#form-field");
const inputEmail = document.querySelector("#email");
const errorMessageEmail = document.querySelector(".error-message-email");
const btnSubmit = document.querySelector("#btn-submit");
const countryField = document.querySelector("#country");
const inputPostalCode = document.querySelector("#postal-code");
const errorMessagePostalCode = document.querySelector(
  ".error-message-postal-code"
);
const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirm-password");
const errorMessagePassword = document.querySelector(".error-message-password");
const errorMessageConfirmPassword = document.querySelector(
  ".error-message-confirm-password"
);
const btnReset = document.querySelector("#btn-reset");

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

  if (inputPostalCode.value === "") {
    errorMessagePostalCode.textContent = errorMessage;
  } else if (constraint.test(inputPostalCode.value)) {
    errorMessagePostalCode.textContent = "";
  } else {
    errorMessagePostalCode.textContent = constraints[countryField.value][1];
  }
}

function checkPassword() {
  const passwordRegex = "^[a-zA-Z0-9]{8,16}$";
  const patternPassword = new RegExp(passwordRegex, "");

  if (inputPassword.validity.valueMissing) {
    errorMessagePassword.textContent = "You need enter a password.";
  } else if (!patternPassword.test(inputPassword.value)) {
    errorMessagePassword.textContent =
      "Password must be at least 8 - 16 characters long.";
  } else if (patternPassword.test(inputPassword.value)) {
    errorMessagePassword.textContent = "";
  }
}

function checkConfirmPassword() {
  const passwordValue = inputPassword.value;
  const confirmPasswordValue = inputConfirmPassword.value;

  if (passwordValue === confirmPasswordValue) {
    errorMessageConfirmPassword.textContent = "Passwords Match.";
  }

  if (passwordValue !== confirmPasswordValue || confirmPasswordValue === "") {
    errorMessageConfirmPassword.textContent = "Passwords do not match.";
  }
}

inputEmail.addEventListener("input", checkEmail);
inputEmail.addEventListener("blur", checkEmail);
countryField.addEventListener("change", checkPostalCode);
inputPostalCode.addEventListener("input", checkPostalCode);
inputPostalCode.addEventListener("blur", checkPostalCode);
inputPassword.addEventListener("input", checkPassword);
inputPassword.addEventListener("blur", checkPassword);
inputConfirmPassword.addEventListener("input", checkConfirmPassword);
inputConfirmPassword.addEventListener("blur", checkConfirmPassword);

btnReset.addEventListener("click", () => {
  errorMessageEmail.textContent = "";
  errorMessagePostalCode.textContent = "";
  errorMessagePassword.textContent = "";
  errorMessageConfirmPassword.textContent = "";
  form.reset();
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  checkEmail();
  checkPostalCode();
  checkPassword();
  checkConfirmPassword();
});

// styling form

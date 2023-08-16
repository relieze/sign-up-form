const form = document.querySelector("form");
const passwordDiv = document.querySelector(".password_div");
const passwordInput = document.querySelector("#password");
const passwordConfirmationInput = document.querySelector("#password_confirmation");

const noMatch = document.createElement("p");
noMatch.style.color = "red";
noMatch.style.fontSize = ".8rem";
noMatch.textContent = "";
passwordDiv.appendChild(noMatch);


const comparePassword = () => {
  if (passwordConfirmationInput.value !== passwordInput.value) {
    noMatch.textContent = "*Passwords do not match";
    passwordInput.style.outlineColor = "red";
    passwordConfirmationInput.style.outlineColor = "red";
    return false;
  } else {
    noMatch.textContent = "";
    passwordInput.style.removeProperty("outline-color");
    passwordConfirmationInput.style.removeProperty("outline-color");
    return true;
  }
};

passwordConfirmationInput.addEventListener("input", comparePassword);
passwordInput.addEventListener("input", () => {
  if (passwordConfirmationInput.value !== "") comparePassword();
})

form.addEventListener("submit", (event) => {
  if (passwordConfirmationInput.value !== passwordInput.value) {
    event.preventDefault();
    noMatch.textContent = "*Passwords do not match";
    passwordInput.style.outlineColor = "red";
    passwordConfirmationInput.style.outlineColor = "red";
  }
})
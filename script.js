const passwordInput = document.getElementById("passwordInput");
let passwordState = passwordInput.value;

passwordInput.addEventListener("keypress", function (e) {
  const character = e.key;
  passwordState += character; // Append the character to the password
  passwordInput.value = censorPassword(passwordState); // Update the input value with censored password

  e.preventDefault(); // Prevent the default action of the keypress
});

passwordInput.addEventListener("keydown", function (e) {
  if (e.key === "Backspace" || e.key === "Delete") {
    // TODO - handle backspace and delete using selectionStart and selectionEnd
    // For now, just remove the last character from password
    if (passwordState.length === 0) {
      return; // Do nothing if password is empty
    }
    passwordState = passwordState.slice(0, -1);
    passwordInput.value = censorPassword(passwordState); // Update the input value with censored password
    e.preventDefault(); // Prevent the default action of the keydown
  }
});

setInterval(() => {
  console.log("Interval", passwordState);
}, 1000);

function censorPassword(password) {
  // Replace every character with *
  return Array(password.length).fill("*").join("");
}

// Declare references to DOM elements
const passwordInput = document.getElementById("passwordInput");
const uncensoredPasswordDiv = document.getElementById("uncensoredPassword");

// Declare a variable to hold the actual password state
var passwordState = passwordInput.value;

// Printable characters event listener
passwordInput.addEventListener("keypress", function (e) {
  const character = e.key;

  // Detect the current selection start and end
  const start = passwordInput.selectionStart;
  const end = passwordInput.selectionEnd;

  // Insert based on selection
  passwordState =
    passwordState.slice(0, start) + character + passwordState.slice(end);

  renderPassword(start + 1); // Update the input value with censored password
  e.preventDefault(); // Prevent the default action of the keypress
});

const notAllowedCtrlKeys = ["c", "v", "x", "z"]; // Only allow selection based operations (e.g. ctrl+a)

// Non-printable characters event listener
passwordInput.addEventListener("keydown", function (e) {
  const isBackspace = e.key === "Backspace";
  const isDelete = e.key === "Delete";
  const ctrlKey = e.ctrlKey || e.metaKey; // Check if Ctrl or Command key is pressed

  if (ctrlKey && notAllowedCtrlKeys.includes(e.key.toLowerCase())) {
    alert("Operation is not allowed");
    e.preventDefault(); // Prevent the default action of the keydown
    return;
  }
  if (!isBackspace && !isDelete) return; // Only handle Backspace and Delete keys. Let KeyPress event handle the rest.
  if (passwordState.length === 0) return; // Do nothing if password is empty

  // Detect the current selection start and end
  let start = passwordInput.selectionStart;
  let end = passwordInput.selectionEnd;
  // In case selection is empty, we need to determine the position based on the key pressed
  if (passwordInput.selectionStart === passwordInput.selectionEnd) {
    start = isBackspace
      ? passwordInput.selectionStart - 1
      : passwordInput.selectionStart;
    end = start + 1;
  }
  // Splice based on selection
  passwordState = passwordState.slice(0, start) + passwordState.slice(end);

  // Update the input value with censored password
  renderPassword(start); // Update the input value with censored password
  e.preventDefault(); // Prevent the default action of the keydown
});

function renderPassword(cursorPosition = undefined) {
  if (cursorPosition === undefined) {
    cursorPosition = passwordState.length;
  }
  // Update the input value with censored password
  const censoredPassword = Array(passwordState.length).fill("*").join(""); // Replace every character with *
  passwordInput.value = censoredPassword;
  // Set the cursor position
  passwordInput.setSelectionRange(cursorPosition, cursorPosition);
  // Update the uncensored password display
  uncensoredPasswordDiv.innerHTML = passwordState;
}

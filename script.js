const passwordInput = document.getElementById("passwordInput");
const password = passwordInput.value;
passwordInput.addEventListener("input", function (e) {
  const password = e.target.value;
  console.log("Password entered: " + password);
});

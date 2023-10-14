const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginForm = document.getElementById("signIn");
const signupForm = document.getElementById("signUp");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Event listener for login form submission
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const loginuserName = document.getElementById("loginuserName").value;
  const password = document.getElementById("loginPassword").value;

  console.log(
    "Login: Username - " + loginuserName + ", Password - " + password
  );
});

// Event listener for sign-up form submission
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupMail").value;
  const password = document.getElementById("signupPassword").value;

  console.log(
    "Sign Up: Name - " +
      name +
      ", Email - " +
      email +
      ", Password - " +
      password
  );
});

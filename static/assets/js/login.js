const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".forms-container");
const loginForm = document.getElementById("signIn");
const signupForm = document.getElementById("signUp");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("signUp-btn");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("signIn-btn");
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

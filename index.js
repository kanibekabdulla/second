let register_btn = document.addEventListener(".Register-btn");
let login_btn = document.addEventListener(".login-btn");
let form = document.querySelector(".form-box");

register_btn.addEventListener("click", () => {
    form.classList.add("Change-form");
});
login_btn.addEventListener("click", () => {
    form.classList.remove("change-form");
});


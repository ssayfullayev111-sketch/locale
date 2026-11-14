
const userId = document.getElementById("userId");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const eye = document.getElementById("eye");

const student = document.getElementById("student");
const parent = document.getElementById("parent");

let userType = "O'quvchi";

student.addEventListener("click", () => {
    userType = "O'quvchi";
    student.classList.add("active");
    parent.classList.remove("active");
});

parent.addEventListener("click", () => {
    userType = "Ota-ona";
    parent.classList.add("active");
    student.classList.remove("active");
});

function checkInputs() {
    if (userId.value.trim() !== "" && password.value.trim() !== "") {
        submit.disabled = false;
        submit.classList.add("active");
    } else {
        submit.disabled = true;
        submit.classList.remove("active");
    }
}

userId.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "◉";
    } else {
        password.type = "password";
        eye.textContent = "◉";
    }
});

submit.addEventListener("click", () => {

    const loginData = {
        id: userId.value.trim(),
        type: userType,
        date: new Date().toLocaleString()
    };

    localStorage.setItem("loginData", JSON.stringify(loginData));

    alert("Ma'lumotlar saqlandi!");

    userId.value = "";
    password.value = "";

    checkInputs();
});


eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "👁️";
    } else {
        password.type = "password";
        eye.textContent = "🙈";
    }
});

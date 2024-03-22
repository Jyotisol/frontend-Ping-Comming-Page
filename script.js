const btn = document.getElementById('btn');
const input = document.querySelector('.input-data');
const email = document.getElementById('email');
const error = document.querySelector('.error');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', () => {
    // const email = input.value.trim();
    if (!emailPattern.test(email.value)) {
        email.style.border = "2px solid Red";
        error.style.display = "block";
        console.log("Invalid email address");
    } else {
        error.style.display = "none";
        email.style.border = "2px solid grey";
        alert("valid email");
        console.log("valid email");
    }
});

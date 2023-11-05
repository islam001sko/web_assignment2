// Welcome section of Welcome page
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    });
});

//Welcome page sign up section
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var isValid = true;

    if (username === "") {
        displayError("username-error", "Username is required.");
        isValid = false;
    } else {
        clearError("username-error");
    }

    if (!isValidPassword(password)) {
        displayError("password-error", "Password must be at least 8 characters with at least one letter and one number.");
        isValid = false;
    } else {
        clearError("password-error");
    }

    if (!isValidEmail(email)) {
        displayError("email-error", "Please enter a valid email address.");
        isValid = false;
    } else {
        clearError("email-error");
    }

    return isValid;
}

function isValidPassword(password) {
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearError(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = "";
}

const firstButton = document.getElementById("firstButton");

firstButton.addEventListener("click", () => {
    console.log("1")
    sliderNav(1)
});


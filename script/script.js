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


//Store page 
var check = false;

function changeVal(el) {
    var qt = parseFloat(el.parentElement.querySelector(".qt").innerHTML);
    var price = parseFloat(el.parentElement.querySelector(".price").innerHTML);
    var eq = Math.round(price * qt * 100) / 100;

    el.parentElement.querySelector(".full-price").innerHTML = eq + "Tenge";


}


document.addEventListener("DOMContentLoaded", function () {
    var qtPlusButtons = document.querySelectorAll(".qt-plus");
    var qtMinusButtons = document.querySelectorAll(".qt-minus");
    var removeButtons = document.querySelectorAll(".remove");
    var btn = document.querySelector(".btn");

    qtPlusButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var qtElement = this.parentElement.querySelector(".qt");
            qtElement.innerHTML = parseInt(qtElement.innerHTML) + 1;
            this.parentElement.querySelector(".full-price").classList.add("added");

            var el = this;
            setTimeout(function () {
                el.parentElement.querySelector(".full-price").classList.remove("added");
                changeVal(el);
            }, 150);
        });
    });

    qtMinusButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var qtElement = this.parentElement.querySelector(".qt");
            if (parseInt(qtElement.innerHTML) > 1) {
                qtElement.innerHTML = parseInt(qtElement.innerHTML) - 1;
            }
            this.parentElement.querySelector(".full-price").classList.add("minused");

            var el = this;
            setTimeout(function () {
                el.parentElement.querySelector(".full-price").classList.remove("minused");
                changeVal(el);
            }, 150);
        });
    });

    setTimeout(function () {
        document.querySelector(".is-open").classList.remove("is-open");
    }, 1200);

    btn.addEventListener("click", function () {
        check = true;
        removeButtons.forEach(function (button) {
            button.click();
        });
    });
});

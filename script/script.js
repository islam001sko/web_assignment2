const button1 = document.getElementById('colorChangeButton1');
const button2 = document.getElementById('colorChangeButton2');

button1.addEventListener('mouseover', function () {
    button1.style.backgroundColor = '#f1c40f';
    button1.style.transform = 'scale(1.1)';
});

button1.addEventListener('mouseout', function () {
    button1.style.backgroundColor = '#3498db';
    button1.style.transform = 'scale(1)';
});

button1.addEventListener('click', function () {
    const userInput = prompt("Please enter your city:");

    if (userInput !== null) {
        alert("You'r city entered to make branch: " + userInput);
    }
});

button2.addEventListener('mouseover', function () {
    button2.style.backgroundColor = '#f1c40f';
    button2.style.transform = 'scale(1.1)';
});

button2.addEventListener('mouseout', function () {
    button2.style.backgroundColor = '#3498db';
    button2.style.transform = 'scale(1)';
});

button2.addEventListener('click', function () {
    const userInput = prompt("Please enter your city:");

    if (userInput !== null) {
        alert("You'r city entered to make branch: " + userInput);
    }
});
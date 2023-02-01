import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
let formData = {};

form.addEventListener('input', throttle(getUserData, 500));
form.addEventListener('submit', handleSubmit);

function getUserData(event) {
formData[event.target.name] = event.target.value;
localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

reloadPage();

function reloadPage() {
    if(localStorage.getItem('feedback-form-state')) {
        input.value = JSON.parse(localStorage.getItem('feedback-form-state'))?.email;
        textarea.value = JSON.parse(localStorage.getItem('feedback-form-state'))?.message;
    } else {
        input.value = ' ';
        textarea.value = ' ';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedData);

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}
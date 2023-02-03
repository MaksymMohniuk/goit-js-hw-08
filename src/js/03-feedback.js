import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
let formData = {};
const savedValues = localStorage.getItem('feedback-form-state');
console.log(savedValues);
const savedDataObject = JSON.parse(savedValues);

form.addEventListener('input', throttle(getUserData, 500));
form.addEventListener('submit', handleSubmit);

function getUserData(event) {
formData[event.target.name] = event.target.value;
localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedData);

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
}

function reloadPage() {
    if(localStorage.getItem('feedback-form-state')) {
        formData = localStorage.getItem('feedback-form-state');
        input.value = savedDataObject.email || '';
        textarea.value = savedDataObject.message || '';
    } 
}
reloadPage();
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
let formData = {};

form.addEventListener('input', throttle(getUserData, 500));
form.addEventListener('submit', handleSubmit);

function getUserData(event) {
localStorage.setItem('feedback-form-state', JSON.stringify(event.target.value));
}

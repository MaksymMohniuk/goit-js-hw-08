import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
let formData = {};
const savedValues = localStorage.getItem('feedback-form-state');
const savedDataObject = JSON.parse(savedValues);

form.addEventListener('input', throttle(getUserData, 500));
form.addEventListener('submit', handleSubmit);

function getUserData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      ...formData,
      [event.target.name]: event.target.value,
    })
  );
}

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
}

function reloadPage() {
  if (localStorage.getItem('feedback-form-state')) {
    formData.email = savedDataObject?.email;
    formData.message = savedDataObject?.message;
    input.value = savedDataObject?.email || '';
    textarea.value = savedDataObject?.message || '';
  }
}
reloadPage();
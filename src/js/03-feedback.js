import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const formData = {};
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateDataFormState();

function onFormSubmit(evt) {
    evt.preventDefault();
    const formElement = evt.currentTarget.elements;   
    const email = formElement.email.value;    
    const message = formElement.message.value;
    const formData = {
        email, message
    };
    console.log(formData);   
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);    
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));     
}

function populateDataFormState(evt) {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));    
    if (savedMsg) {
        Object.keys(savedMsg).forEach(name => {
        const inp = form.querySelector(`[name="${name}"]`);
        if (inp) {
            inp.value = savedMsg[name]
        };
    });    
    }    
}




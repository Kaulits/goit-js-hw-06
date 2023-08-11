const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.dataset.length;


inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
    if (inputEl.value.length === parseInt(lengthEl)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
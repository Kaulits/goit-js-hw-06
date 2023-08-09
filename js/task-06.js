const inputEl = document.querySelector('#validation-input');
const lenghtEl = Number(inputEl.getAttribute('data-length'));


inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
    if (inputEl.value.length === lenghtEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
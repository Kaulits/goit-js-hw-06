let counterValue = 0;

const valueEl = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonInrement = document.querySelector('[data-action="increment"]');



buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

buttonInrement.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxesContainer = document.querySelector('#boxes')

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
 let firstBox = 30;

function createBoxes() {
  const userNumber = Number(inputEl.value);
  const totalBoxes = [];
 

  for (let i = 0; i < userNumber; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${firstBox}px`;
    newBox.style.height = `${firstBox}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    totalBoxes.push(newBox);
    firstBox += 10;
  }
  boxesContainer.append(...totalBoxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  inputEl.value = '';
}
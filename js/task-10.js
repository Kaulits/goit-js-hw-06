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

function createBoxes() {
  const total = Number(inputEl.value);
  const totalBoxes = [];

  for (let i = 0; i < total; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    totalBoxes.push(newBox);
  }
  boxesContainer.append(...totalBoxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyEl = document.body;

changeColorEl.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;

  colorEl.textContent = newColor;
});

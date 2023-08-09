const fontEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontEl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    const fontSize = fontEl.value + 'px';
    textEl.style.fontSize = fontSize;
}
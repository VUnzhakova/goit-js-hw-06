// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputControlElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

textElement.style.fontSize = inputControlElement.value + 'px';

const textResizing = () => {
    textElement.style.fontSize = `${inputControlElement.value}px`;
}

inputControlElement.addEventListener('input', textResizing);
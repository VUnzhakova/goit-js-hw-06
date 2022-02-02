// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const inputHandle = () => {
    if (inputElement.value.length > 0) {
        outputElement.textContent = inputElement.value;
        // return;
    } else {
        outputElement.textContent = 'Anonymous';
    }

 }

inputElement.addEventListener('input', inputHandle);

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyChangeEl = document.querySelector('body');
const buttonColorEl = document.querySelector('.change-color');
const colorBgEl = document.querySelector('.color');

buttonColorEl.addEventListener('click', () => {
  bodyChangeEl.style.backgroundColor = getRandomHexColor();
  colorBgEl.textContent = bodyChangeEl.style.backgroundColor;
});
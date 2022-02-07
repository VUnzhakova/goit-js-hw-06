
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.body;
const buttonElement = document.querySelector('.change-color');
const colorElement = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  colorElement.textContent = bodyElement.style.backgroundColor;
});
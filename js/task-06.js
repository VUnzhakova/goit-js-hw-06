// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

const validationInputElement = document.querySelector('#validation-input');


const checkNumbers = () => {
    if (validationInputElement.value.length === Number(validationInputElement.dataset.length)) {
        validationInputElement.classList.remove(`invalid`);
        validationInputElement.classList.add(`valid`);
        return;
    } else {
        validationInputElement.classList.remove(`valid`);
        validationInputElement.classList.add(`invalid`);
    };
}

validationInputElement.addEventListener('blur', checkNumbers);
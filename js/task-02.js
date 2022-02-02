// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const ingredientsItemsEl = document.createElement('li');
  ingredientsItemsEl.classList.add('item');
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});


ingredientsElement.append(...createItemEl);
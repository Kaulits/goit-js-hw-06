const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMassive = document.querySelector('#ingredients');

const ingridientItem = ingredients.map(ingridient => {
  const li = document.createElement('li');
  li.textContent = ingridient;
  li.classList.add('item');
  return li;
})


ingredientsMassive.append(...ingridientItem);

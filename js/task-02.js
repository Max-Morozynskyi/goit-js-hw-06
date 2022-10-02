const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const makeIngredient = (item) => {
  let liRef = document.createElement('li');
  liRef.textContent = item;
  liRef.classList.add("item");
  return liRef;
}

ingredientsRef.append(...ingredients.map(makeIngredient));
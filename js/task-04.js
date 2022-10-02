const counterRef = document.querySelector('#counter');
const incrementRef = counterRef.querySelector('button[data-action="increment"]');
const decrementRef = counterRef.querySelector('button[data-action="decrement"]');
const valueRef = counterRef.querySelector('#value');

let counterValue = 0;

incrementRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
})

decrementRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
})
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (name) => {
  if (name.currentTarget.value == "") {
    outputRef.textContent = 'Anonymous';
  } else {outputRef.textContent = name.currentTarget.value;}
})
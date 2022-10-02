function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createRef = document.querySelector("button[data-create]");
const destroyRef = document.querySelector("button[data-destroy]");
const numbRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");

createRef.addEventListener('click', () => { if (numbRef.value === "") {
  alert("Пожалуйста, введите число от 1 до 100!");
} else {  createBoxes(numbRef.value);   }
})

destroyRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const magicBox = [];
  for ( let i = 0; i < amount; i += 1 ) {
    const box = document.createElement("div");
    const boxSize = 30 + 10 * i;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    magicBox.push(box);
  }
  boxesRef.append(...magicBox);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
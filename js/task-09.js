function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const magicBtn = document.querySelector(".change-color");
const textRef = document.querySelector(".color");

magicBtn.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textRef.textContent = currentColor;
})
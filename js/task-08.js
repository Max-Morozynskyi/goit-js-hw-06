const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", action)

function action(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Обнаружены незаполненные поля! Пожалуйста, заполните форму!");
  } else {
    const user = {
      email: email.value,
      password: password.value
    }
    console.log(user);
    event.currentTarget.reset();
  }
}
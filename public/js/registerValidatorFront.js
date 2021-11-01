function qs(element) {
  return document.querySelector(element);
}

window.addEventListener("load", function () {
  let $inputfirstName = qs("#firstName");
  $firstNameErrors = qs("#firstNameErrors");
  $inputlastName = qs("#lastName");
  $lastNameErrors = qs("#lastNameErrors");
  $formRegister = qs("#formRegister");
  $email = qs("#email");
  $emailErrors = qs("#emailErrors");
  $password1 = qs("#password1");
  $password1Errors = qs("#password1Errors");
  $password2 = qs("#password2");
  $password2Errors = qs("#password2Errors");
  regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
  regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

  $inputfirstName.addEventListener("blur", function () {    
    switch (true) {
      case !$inputfirstName.value.trim():
        $firstNameErrors.innerHTML = "Debes escribir tu nombre";
        $inputfirstName.classList.add("is-invalid");
        break;
      case !regExAlpha.test($inputfirstName.value):
        $firstNameErrors.innerHTML = "Debes ingresar un nombre válido";
        $inputfirstName.classList.add("is-invalid");
        break;
      default:
        $inputfirstName.classList.remove("is-invalid");
        $inputfirstName.classList.add("is-valid");
        $firstNameErrors.innerHTML = "";
        break;
    }
  });

  $inputlastName.addEventListener("blur", function () {
    console.log("hola");
    switch (true) {
      case !$inputlastName.value.trim():
        $lastNameErrors.innerHTML = "Debes escribir tu apellido";
        $inputlastName.classList.add("is-invalid");
        break;
      case !regExAlpha.test($inputlastName.value):
        $lastNameErrors.innerHTML = "Debes ingresar un apellido válido";
        $inputlastName.classList.add("is-invalid");
        break;
      default:
        $inputlastName.classList.remove("is-invalid");
        $inputlastName.classList.add("is-valid");
        $lastNameErrors.innerHTML = "";
        break;
    }
  });

  $email.addEventListener("blur", function () {
    switch (true) {
      case !$email.value.trim():
        $emailErrors.innerHTML = "El campo email es obligatorio";
        $email.classList.add("is-invalid");
        break;
      case !regExEmail.test($email.value):
        $emailErrors.innerHTML = "Debe ingresar un email válido";
        $email.classList.add("is-invalid");
        break;
      default:
        $email.classList.remove("is-invalid");
        $email.classList.add("is-valid");
        $emailErrors.innerHTML = "";
        break;
    }
  });

  $password1.addEventListener("blur", function () {
    switch (true) {
      case !$password1.value.trim():
        $password1Errors.innerHTML = "El campo contraseña es obligatorio";
        $password1.classList.add("is-invalid");
        break;
      case !regExPass.test($password1.value):
        $password1Errors.innerHTML =
          "La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número";
        $password1.classList.add("is-invalid");
        break;
      default:
        $password1.classList.remove("is-invalid");
        $password1.classList.add("is-valid");
        $password1Errors.innerHTML = "";
        break;
    }
  });

  $password2.addEventListener("blur", function () {
    switch (true) {
      case !$password2.value.trim():
        $password2Errors.innerHTML = "Debes reingresar la contraseña";
        $password2.classList.add("is-invalid");
        break;
      case $password2.value != $password1.value:
        $password2Errors.innerHTML = "Las contraseñas no coinciden";
        $password2.classList.add("is-invalid");
        break;
      default:
        $password2.classList.remove("is-invalid");
        $password2.classList.add("is-valid");
        $password2Errors.innerHTML = "";
        break;
    }
  });

  $formRegister.addEventListener("submit", function (event) {
    let error = false;
    event.preventDefault();
    console.log($formRegister.elements);
    let elementForm = this.elements;

    for (let index = 0; index < elementForm.length - 1; index++) {
      if (elementForm[index].value == "") {
        elementForm[index].classList.add("is-invalid");
        submitErrors.innerHTML = "Los campos señalados son obligatorios";
        error = true;
      }
    }
    if (!error) {
      console.log("Todo bien");
      $formRegister.submit();
    }
  });
});

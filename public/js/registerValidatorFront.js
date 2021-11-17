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
        break;
      case !regExAlpha.test($inputfirstName.value):
        $inputfirstName.style.border = "1px solid red"
        $firstNameErrors.innerHTML = "Debes ingresar un nombre válido";
        break;
      default:
        $firstNameErrors.innerHTML = "";
        break;
    }
  });

  $inputlastName.addEventListener("blur", function () {
    console.log("hola");
    switch (true) {
      case !$inputlastName.value.trim():
        $lastNameErrors.innerHTML = "Debes escribir tu apellido";
        break;
      case !regExAlpha.test($inputlastName.value):
        $inputlastName.style.border = "1px solid red"
        $lastNameErrors.innerHTML = "Debes ingresar un apellido válido";
        break;
      default:
        $lastNameErrors.innerHTML = "";
        break;
    }
  });

  $email.addEventListener("blur", function () {
    switch (true) {
      case !$email.value.trim():
        $emailErrors.innerHTML = "El campo email es obligatorio";
        break;
      case !regExEmail.test($email.value):
        $email.style.border = "1px solid red"
        $emailErrors.innerHTML = "Debe ingresar un email válido";
        break;
      default:
        $emailErrors.innerHTML = "";
        break;
    }
  });

  $password1.addEventListener("blur", function () {
    switch (true) {
      case !$password1.value.trim():
        $password1Errors.innerHTML = "El campo contraseña es obligatorio";
        break;
      case !regExPass.test($password1.value):
        $password1.style.border = "1px solid red"
        $password1Errors.innerHTML =
          "La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número";
        break;
      default:
        $password1Errors.innerHTML = "";
        break;
    }
  });

  $password2.addEventListener("blur", function () {
    switch (true) {
      case !$password2.value.trim():
        $password2Errors.innerHTML = "Debes reingresar la contraseña";
        break;
      case $password2.value != $password1.value:
        $password2.style.border = "1px solid red"
        $password2Errors.innerHTML = "Las contraseñas no coinciden";
        break;
      default:
        $password2Errors.innerHTML = "";
        break;
    }
  });

  $formRegister.addEventListener("submit", function (event) {
    let error = false;
    event.preventDefault();
    let elementForm = this.elements;

    for (let index = 0; index < elementForm.length - 1; index++) {
      if (elementForm[index].value == "") {
        elementForm[index].style.border = '1px solid red'
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

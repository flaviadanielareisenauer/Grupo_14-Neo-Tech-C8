function qs(element) {
    return document.querySelector(element);
}

window.addEventListener("load", () => {
    $email = qs('#email');
    $emailErrors = qs('#emailErrors');
    $password = qs('#passwordLog');
    $passwordErrors = qs('#passwordErrorsLog');

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                $email.style.border = "1px solid red"
                $emailErrors.innerHTML = "*Debes ingresar un email";
                $email.classList.add("is-invalid");
                break;
            case !regExEmail.test($email.value):
                $email.style.border = "1px solid red"
                $emailErrors.innerHTML = "*Debes ingresar un email válido";
                $email.classList.add("is-invalid");
                break;
            default:
                $email.classList.remove("is-invalid");
                $email.classList.add("is-valid");
                $emailErrors.innerHTML = "";
                break;
        }
    });

    $password.addEventListener("blur", () => {
        switch (true) {
            case !$password.value.trim():
                $password.style.border = "1px solid red"
                $passwordErrors.innerHTML = "Debes ingresar una contraseña"
                $password.classList.add("is-invalid");
                break;
            case !regExPass.test($password.value):
                $password.style.border = "1px solid red"
                $passwordErrors.innerHTML = "La contraseña debe tener: entre 6 y 12 caracteres";
                $password.classList.add("is-invalid");
                break;

            default:
                $password.classList.remove("is-invalid");
                $password.classList.add("is-valid");
                $passwordErrors.innerHTML = "";
                break;
        }
    });

})
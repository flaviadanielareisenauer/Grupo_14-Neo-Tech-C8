function qs(element) {
    return document.querySelector(element);
}

window.addEventListener("load", () => {
    $emailLog = qs('#emailLog');
    $emailErrorsLog = qs('#emailErrorsLog');
    $passwordLog = qs('#passwordLog');
    $passwordErrorsLog = qs('#passwordErrorsLog');

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $emailLog.addEventListener("blur", () => {
        switch (true) {
            case !$emailLog.value.trim():
                $emailLog.style.border = "1px solid red"
                $emailErrorsLog.innerHTML = "Debes ingresar un email";
                $emailLog.classList.add("is-invalid");
                break;
            case !regExEmailLog.test($email.value):
                $emailLog.style.border = "1px solid red"
                $emailErrorsLog.innerHTML = "Debes ingresar un email válido";
                $emailLog.classList.add("is-invalid");
                break;
            default:
                $emailLog.classList.remove("is-invalid");
                $emailLog.classList.add("is-valid");
                $emailErrorsLog.innerHTML = "";
                break;
        }
    });

    $passwordLog.addEventListener("blur", () => {
        switch (true) {
            case !$passwordLog.value.trim():
                $passwordLog.style.border = "1px solid red"
                $passwordErrorsLog.innerHTML = "Debes ingresar una contraseña"
                $passwordLog.classList.add("is-invalid");
                break;

        }
    });

})
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

                break;
            case !regExEmail.test($emailLog.value):
                $emailLog.style.border = "1px solid red"
                $emailErrorsLog.innerHTML = "Debes ingresar un email válido";

                break;
            default:
                $emailLog.style.border = "none"
                $emailErrorsLog.innerHTML = "";
                break;
        }
    });

    $passwordLog.addEventListener("blur", () => {
        switch (true) {
            case !$passwordLog.value.trim():
                $passwordLog.style.border = "1px solid red"
                $passwordErrorsLog.innerHTML = "Debes ingresar una contraseña"
                break;


            default:
                $passwordLog.style.border = "none"
                $passwordErrorsLog.innerHTML = ""
                break;
        }
    });

})
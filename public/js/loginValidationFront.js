function qs(element) {
    return document.querySelector(element);
}

window.addEventListener("load", () => {
    $emailLog = qs('#emailLog');
    $emailErrorsLog = qs('#emailErrorsLog');
    $passwordLog = qs('#passwordLog');
    $form__login = qs('.form__login')
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
    $form__login.addEventListener("submit", function(event) {
        let errors = false;
        event.preventDefault();
        let elementForm = this.elements;
        for (let i = 0; i < elementForm.length - 1; i++) {
            if (elementForm[i].value == "") {
                submitLoginErrors.innerHTML = "Los campos señalados son obligatorios";
                elementForm[i].style.border = "1px solid red";
                $emailErrorsLog.innerHTML = "Debes ingresar un email";
                $passwordErrorsLog.innerHTML = "Debes ingresar una contraseña"
                errors = true;
            }
            if (!elementForm[i].value == "" && errors == true) {
                $emailErrorsLog.innerHTML = "Debes ingresar un email válido";
                submitLoginErrors.innerHTML = "Los campos señalados son obligatorios";
                errors = true;
            }
        }
        if (!errors) {
            console.log("Todo bien");
            $form__login.submit();
        }
    });


})
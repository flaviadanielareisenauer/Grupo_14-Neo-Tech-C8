function qs(element) {
    return document.querySelector(element);
}

window.addEventListener("load", function() {
    const $email = qs('#email');
    const $emailErrors = qs('#emailErrors');
    const $firstName = qs('#firstName');
    const $firstNameErrors = qs('#firstNameErrors');
    const $lastName = qs('#lastName');
    const $lastNameErrors = qs('#lastNameErrors');
    const $profileEditForm = qs('#profileEditForm');
    const $submitErrors = qs('#submitErrors');
    const $inputSelectProvince = qs('#inputSelectProvince');

    const $inputSelectCity = qs('#inputSelectCity');
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    console.log("putoooooooo")
    $email.addEventListener("blur", function() {
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

    $firstName.addEventListener("blur", function() {
        switch (true) {
            case !$firstName.value.trim():
                $firstName.style.border = "1px solid red"
                $firstNameErrors.innerHTML = "*Debes escribir tu apellido";
                $firstName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputfirstName.value):
                $firstName.style.border = "1px solid red"
                $firstNameErrors.innerHTML = "*Debes ingresar un apellido válido";
                $firstName.classList.add("is-invalid");
                break;
            default:
                $firstName.classList.remove("is-invalid");
                $firstName.classList.add("is-valid");
                $firstNameErrors.innerHTML = "";
                break;
        }
    });

    $lastName.addEventListener("blur", function() {
        switch (true) {
            case !$lastName.value.trim():
                $lastName.style.border = "1px solid red"
                $lastNameErrors.innerHTML = "*Debes escribir tu nombre";
                $lastName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputfirstName.value):
                $lastName.style.border = "1px solid red"
                $lastNameErrors.innerHTML = "*Debes ingresar un nombre válido";
                $lastName.classList.add("is-invalid");
                break;
            default:
                $lastName.classList.remove("is-invalid");
                $lastName.classList.add("is-valid");
                $lastNameErrors.innerHTML = "";
                break;
        }
    });

    /* 
        $profileEditForm.addEventListener("submit", function(event) {
            let error = false;
            event.preventDefault();
            console.log($profileEditForm.elements);
            let elementForm = this.elements;

            for (let i = 0; i < elementForm.length - 1; i++) {
                if (elementForm[i].value == "") {
                    elementForm[i].classList.add("is-invalid");
                    $submitErrors.innerHTML = "Los campos señalados son obligatorios";
                    error = true;
                }
            }
            if (!error) {

                $profileEditForm.submit();
            }
        }); */



    fetch('https://apis.datos.gob.ar/georef/api/provincias')
        // fetch('https://apis.datos.gob.ar/georef/api/municipios?provincia=22&campos=id,nombre&max=100')

    .then(function(response) {
        return response.json();
    })

    .then((result) => {
            let provinces = result.provincias.sort((prev, next) => {
                prev.nombre > next.nombre ?
                    1 :
                    prev.nombre < next.nombre ? -1 : 0;

            });

            provinces.forEach(province => {
                $inputSelectProvince.innerHTML += `<option value="${province.id}">${province.nombre}</option>`
            });
        })
        .catch((err) => {
            console.log(err)
        })

    $inputSelectProvince.addEventListener('change', function(event) {
        let idProvince = event.target.value
        $inputSelectCity.innerHTML = " "

        function fetchCities(id) {
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${id}&campos=id,nombre&max=5000`)
                .then(response => response.json())
                .then(result => {
                    let cities = result.localidades.sort((prev, next) => {
                        return prev.nombre > next.nombre ?
                            1 :
                            prev.nombre < next.nombre ? -1 : 0;
                    })

                    cities.forEach(city => {
                        $inputSelectCity.innerHTML += ` <option value="${city.nombre}">${city.nombre}</option>`
                    })

                })

        }

        fetchCities(idProvince)
    })


})
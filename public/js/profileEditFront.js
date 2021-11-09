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


    $email.addEventListener("blur", function() {
        switch (true) {
            case !$email.value.trim():
                $email.style.border = "1px solid red"
                $emailErrors.innerHTML = "El campo email no puede ir vacío";
                break;
            case !regExEmail.test($email.value):
                $email.style.border = "1px solid red";
                $emailErrors.innerHTML = "Debes ingresar un email válido";
                break;
            default:
                $email.style.border = "1px solid #d9d9d9";
                $emailErrors.innerHTML = "";
                break;
        }
    });

    $firstName.addEventListener("blur", function() {
        switch (true) {
            case !$firstName.value.trim():
                $firstName.style.border = "1px solid red"
                $firstNameErrors.innerHTML = "El campo nombre no puede ir vacío";
                break;
            case !regExAlpha.test($firstName.value):
                $firstName.style.border = "1px solid red"
                $firstNameErrors.innerHTML = "Debes ingresar un nombre válido";
                break;
            default:
                $firstName.style.border = "1px solid #d9d9d9";
                $firstNameErrors.innerHTML = "";
                break;
        }
    });

    $lastName.addEventListener("blur", function() {
        switch (true) {
            case !$lastName.value.trim():
                $lastName.style.border = "1px solid red"
                $lastNameErrors.innerHTML = "El campo apellido no puede ir vacío";
                break;
            case !regExAlpha.test($lastName.value):
                $lastName.style.border = "1px solid red"
                $lastNameErrors.innerHTML = "Debes ingresar un apellido válido";
                break;
            default:
                $lastName.style.border = "1px solid #d9d9d9"
                $lastNameErrors.innerHTML = "";
                break;
        }
    });


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

    $profileEditForm.addEventListener("submit", function(event) {
        let error = false;
        event.preventDefault();
        console.log($profileEditForm.elements);
        let elementForm = this.elements;

        for (let i = 0; i < elementForm.length - 10; i++) {
            if (elementForm[i].value == "" && elementForm[i].name !== "avatar" && elementForm[i].name !== "password") {
                $submitErrors.innerHTML = "Los campos señalados son obligatorios";
                error = true;
            }
        }
        if (!error) {
            console.log("Todo bien");
            $profileEditForm.submit();
        }
    });
})
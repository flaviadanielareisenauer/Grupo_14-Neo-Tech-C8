function qs(element) {
    return document.querySelector(element);
}

window.addEventListener("load", function() {
    $file = qs("#cambiarImagen"),
        $fileErrors = qs("#fileErrors"),


        $file.addEventListener('change',
            function fileValidation() {
                let filePath = $file.value, //Capturo el valor del input
                    allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
                if (!allowefExtensions.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
                    $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
                    $file.value = '';
                    return false;

                } else {
                    $fileErrors.innerHTML = '';
                    $file.value = value;
                }
            })
})
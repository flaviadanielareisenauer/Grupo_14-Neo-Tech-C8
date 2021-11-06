function qs(element) {
    return document.querySelector(element);
  }
  
  window.addEventListener("load", function () {
    $file = qs("#cambiarImagen"),
    $fileErrors = qs("#fileErrors"),
    $imgPreview = qs("#preview");
    
$file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            return false;
        }
    })
  })

  /*let file = document.getElementById('cambiarImagen')

file.addEventListener('change', 
function fileValidation(){
    var fileError = document.getElementById('fileErrors')
    var filePath = file.value; //Capturo el valor del input
    var allowefExtensions = /(.jpg|.jpeg|.png|.gif)$/i; //Extensiones permitidas
    if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
        let error = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
        fileError.innerHTML = error;
        file.value = '';
        document.getElementById('preview').innerHTML = '';
        return false;
    }else{
        // Image preview
        if(file.files && file.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                document.getElementById('preview').innerHTML = '<img src="' + e.target.result +'"/>';
            };
            reader.readAsDataURL(file.files[0]);
            errorImage.innerHTML = '';
        }
    }
})*/
document.getElementById('file').onchange = function(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function() {
        let preview = document.getElementById('preview');
        image = document.createElement('img');
        image.src = reader.result;
        image.style.width = "200px"
        image.style.height = "200px"
        image.style.borderRadius = "50%"

        preview.innerHTML = '';
        preview.append(image)
        imagen = document.getElementById('avatarProfile')
        image ? imagen.style.display = "none" : imagen
    }
}
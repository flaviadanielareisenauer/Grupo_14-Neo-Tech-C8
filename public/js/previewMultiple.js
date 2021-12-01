let dropBox = document.getElementById('dropBox');

	// modificar todos los tipos de eventos necesarios para el script para que el navegador
	// no abra la imagen en la pestaña del navegador (comportamiento predeterminado)

	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
		dropBox.addEventListener(evt, prevDefault, false);
	});
	function prevDefault (e) {
		e.preventDefault();
		e.stopPropagation();
	}
	 
	// eliminar y agregar la clase hover, dependiendo de si se está haciendo algo
	// activamente sobre el área de la caja

	['dragenter', 'dragover'].forEach(evt => {
		dropBox.addEventListener(evt, hover, false);
	});
	['dragleave', 'drop'].forEach(evt => {
		dropBox.addEventListener(evt, unhover, false);
	});
	function hover(e) {
		dropBox.classList.add('hover');
	}
	function unhover(e) {
		dropBox.classList.remove('hover');
	}

	// el objeto DataTransfer contiene los datos que se arrastran. es accesible
 	// de la propiedad dataTransfer de los eventos hover. la propiedad de archivos tiene
	// todos los archivos que se arrastran. van a la función filesManager

	dropBox.addEventListener('drop', mngDrop, false);
	function mngDrop(e) {
		let dataTrans = e.dataTransfer;
		let files = dataTrans.files;
		filesManager(files);
	}

	// use la API del navegador FormData para crear un conjunto de pares key/value que representen
	// campos de formulario y sus valores, para enviar usando el método XMLHttpRequest.send ().
	// Usa el mismo formato que usaría un formulario con multipart/form-data

	function upFile(file) {

		// solo permite que se suban imágenes

		let imageType = /image.*/;
		if (file.type.match(imageType)) {
			let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
		
			let formData = new FormData();

			// agregue un nuevo valor a una key existente dentro de un objeto FormData o agregue la
			// clave si no existe. la función filesManager recorrerá
			// cada archivo y lo enviara aca para agregarlo

			formData.append('file', file);

			// configuración estándar de recuperación de carga de archivos

			fetch(url, {
				method: 'put',
				body: formData
			})
			.then(response => response.json())
			.then(result => { console.log('Success:', result); })
			.catch(error => { console.error('Error:', error); });
		} else {
			console.error("Solo se permiten imagenes!", file);
		}
	}

	// use la API FileReader para obtener los datos de la imagen, cree un elemento img y agregue
	// al div con id "gallery". La API es asincrónica, por lo que onloadend se utiliza para obtener
	// resultado de la función API

	function previewFile(file) {
		let imageType = /image.*/;
		if (file.type.match(imageType)) {
			let fReader = new FileReader();
			let gallery = document.getElementById('gallery');

			// lee el contenido del Blob especificado. el atributo de resultado de este
			// con retención de datos: URL que representa los datos del archivo

			fReader.readAsDataURL(file);

			// controlador para el evento onloadend, que se activa cuando la operación de lectura es
			// completado (ya sea exitoso o fracasado)

			fReader.onloadend = function() {
				let wrap = document.createElement('div');
				let img = document.createElement('img');

				// establece el atributo img src en el contenido del archivo 

				img.src = fReader.result;
				let imgCapt = document.createElement('p');

				// el prop de nombre del archivo contiene el nombre del archivo y el prop de tamaño
				// el tamaño del archivo. convertir bytes a KB para el tamaño del archivo

				let fSize = (file.size / 1000) + ' KB';
				imgCapt.innerHTML = `<span class="fName">${file.name}</span><span class="fSize">${fSize}</span><span class="fType">${file.type}</span>`;
				gallery.appendChild(wrap).appendChild(img);
				gallery.appendChild(wrap).appendChild(imgCapt);
			}
		} else {
			console.error("Solo imagenes!", file);
		}
	}

	function filesManager(files) {

		//  DataTransfer.files en un nuevo
		// array de archivos aquí

		files = [...files];
		
		// envía cada elemento del array tanto a upFile como a previewFile
		// funciones

		files.forEach(upFile);
		files.forEach(previewFile);
	}
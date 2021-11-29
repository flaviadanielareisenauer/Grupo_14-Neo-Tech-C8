function qs (element){
    return document.querySelector(element)
}

window.addEventListener('load', function (){
    let $productName = qs('#productName'),
    $productCategorias = qs('#productCategorias'),
    $productCode = qs('#productCode'),
    $productPrice= qs('#productPrice'),
    $productNameError = qs('#productNameErrors'),
    $productCodeError = qs('#productCodeErrors'),
    $productPriceError = qs('#productPriceErrors'),
    $productcategoriasErrors = qs('#categoriasErrors'),
    $formCarga = qs('#formCarga')
    regExNumber = /^\d+$/ 
   


    $productName.addEventListener('blur', function(){
   
        if(!$productName.value.trim()){
            $productNameError.innerHTML = 'El campo nombre es obligatorio'
            $productName.style.border = "1px solid red"
        }else{
            $productNameError.innerHTML = " "
            $productName.style.border = "none"
        }
    })

    $productCode.addEventListener('blur',function(){
        switch (true){
            case !$productCode.value.trim(): 
                $productCodeError.innerHTML = 'este campo es obligatorio'
                $productCode.style.border = "1px solid red" 
                break 
            case !regExNumber.test($productCode.value):    
            $productCodeError.innerHTML = 'Debes ingresar un código numérico'
            $productCode.style.border = "1px solid red"
                    break
            default:
                $productCodeError.innerHTML=" "
                $productCode.style.border = "none"
                break
        }
    })


    $productPrice.addEventListener('blur', function(){
        switch (true){
            case !$productPrice.value.trim(): 
                $productPriceError.innerHTML = 'este campo es obligatorio'
                $productPrice.style.border = "1px solid red" 
                break 
            case !regExNumber.test($productPrice.value):    
            $productPriceError.innerHTML = 'Debes ingresar un valor numérico'
            $productPrice.style.border = "1px solid red"
                    break
            default:
                $productPriceError.innerHTML=" "
                $productPrice.style.border = "none"
                break
        }
    })

    $productCategorias.addEventListener('blur', function(){
   
        if(!$productCategorias.value.trim()){
            $productcategoriasErrors.innerHTML = 'Este campo es obligatorio'
            $productCategorias.style.border = "1px solid red"
            console.log('funciona')
        }else{
            $productcategoriasErrors.innerHTML = " "
            $productCategorias.style.border = "none"
        }
    })


    
$formCarga.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($formCarga.elements)
    let elementosForm = this.elements
    
    for (let index = 1; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == "" && elementosForm[index].name !== "image" 
        && elementosForm[index].name !== "description" && elementosForm[index].name !== "discount"
        && elementosForm[index].name !== "color" ){
            elementosForm[index].style.border = "1px solid red"
            submitErrors.innerHTML = "Los campos señalados son obligatorios";
            error = true;
        }
    }

    if(!error){
        console.log('Todo bien');
        $formCarga.submit()
    }

 })


})

const $buttonBanner = document.getElementById('button-banner-modal')

$buttonBanner.addEventListener('click', () => {
    const $modal_container = document.getElementById('modal_container')
    const $close = document.getElementById('close')
    const $cancel = document.getElementById('cancel')
    const $productDeleteForm = document.getElementById('productDeleteForm')

    $modal_container.classList.add('showDelete');
    $modal_container.style.zIndex = "1010";

    /*  $productDeleteForm.setAttribute('action', `/admin/products/delete/${open.value}?_method=DELETE`) */



    $close.addEventListener('click', () => {
        $modal_container.classList.remove('showDelete');
    })

    $cancel.addEventListener('click', () => {
        $modal_container.classList.remove('showDelete');
    })
})
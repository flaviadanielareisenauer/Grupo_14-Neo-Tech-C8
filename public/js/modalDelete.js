const $open = document.querySelectorAll('#open')
const $modal_container = document.getElementById('modal_container')
const $close = document.getElementById('close')
const $cancel = document.getElementById('cancel')
const $productDeleteForm = document.getElementById('productDeleteForm')
$open.forEach(open => {
    open.addEventListener('click', () => {
        $modal_container.classList.add('showDelete');
        $productDeleteForm.setAttribute('action', `/admin/products/delete/${open.value}?_method=DELETE`)
    })
})

$close.addEventListener('click', () => {
    $modal_container.classList.remove('showDelete');
})

$cancel.addEventListener('click', () => {
    $modal_container.classList.remove('showDelete');
})
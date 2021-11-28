const $addCategory = document.querySelector('.addCategory')
const $addCategoryText = document.querySelector('.addCategoryText')


$addCategoryText.addEventListener('click', () => {
    $addCategory.style.display == "block" ? $addCategory.style.display = "none" : $addCategory.style.display = "block"
})
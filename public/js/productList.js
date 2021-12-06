const $addCategory = document.querySelector('.addCategory')
const $addCategoryText = document.querySelector('.addCategoryText')
const $categoriesContainer = document.querySelector('.products-category-container')


$addCategoryText.addEventListener('click', () => {
    $addCategory.style.display == "block" ? $addCategory.style.display = "none" : $addCategory.style.display = "block";
    $categoriesContainer.style.height == "750px" ? $categoriesContainer.style.height = "700px": $categoriesContainer.style.height = "750px";
})
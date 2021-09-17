addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})

addEventListener('DOMContentLoaded', () => {
    const btn_user = document.querySelector('.user-container');
    if (btn_user) {
        btn_user.addEventListener('click', () => {
            const btn_list = document.querySelector('.list')
            btn_list.style.display == "none" ? btn_list.style.display = "block" : btn_list.style.display = "none"
        })
    }
})
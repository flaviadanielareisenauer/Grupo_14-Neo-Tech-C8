addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})
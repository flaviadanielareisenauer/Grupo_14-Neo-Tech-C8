addEventListener('DOMContentLoaded', () => {
    const btn_user = document.querySelector('.user-containe');

    if (btn_user) {

        btn_user.addEventListener('click', () => {
            const btn_list = document.querySelector('.list')
            btn_list.style.display == "block" ? btn_list.style.display = "none" : btn_list.style.display = "block"
        })
    }
})

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu');
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_bottom = document.querySelector('.menu-bottom');
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
            menu_bottom.style.display = "block";
        })
    }

})

function backHome() {
    const bar_arcoiris_container = document.querySelector('#bar-arcoiris');
    const scroll = document.documentElement.scrollTop;
    const icon = document.querySelector('.back-home-container');
    const btn_list = document.querySelector('.list');

    if (scroll > 50) {
        icon.style.display = "block";
        bar_arcoiris_container.style.position = "fixed";
        bar_arcoiris_container.style.marginTop = "-38px";
        bar_arcoiris_container.style.zIndex = "900";
        bar_arcoiris_container.style.width = "100%";
        btn_list.style.display = "none"
    } else {
        icon.style.display = "none";
        bar_arcoiris_container.style.position = "relative";
        bar_arcoiris_container.style.marginTop = "0";
        bar_arcoiris_container.style.zIndex = "900";
        bar_arcoiris_container.style.width = "100%";
    }
}
window.addEventListener('scroll', backHome)
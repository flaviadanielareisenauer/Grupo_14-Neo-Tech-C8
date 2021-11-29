addEventListener("DOMContentLoaded", () => {
    const btn_user = document.querySelector(".user-icon-login");

    if (btn_user) {
        btn_user.addEventListener("click", () => {
            const btn_list = document.querySelector(".list");
            btn_list.style.display == "block" ?
                (btn_list.style.display = "none") :
                (btn_list.style.display = "block");
        });
    }
});

addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector(".btn-menu");
    if (btn_menu) {
        btn_menu.addEventListener("click", () => {
            const menu_bottom = document.querySelector(".menu-bottom");
            const menu_items = document.querySelector(".menu-items");
            menu_items.classList.toggle("show");
            menu_bottom.style.display = "block";
        });
    }
})

if (window.innerWidth < 550) {
    const $search_bar = document.querySelector('.search');
    const $iconSearchMobile = document.querySelector('.iconSearchMobile');
    const arrow = document.querySelector('.arrowSearch');
    $iconSearchMobile.addEventListener('click', () => {
        $search_bar.style.display = "block"
        arrow.style.display = "block"
    })
    arrow.addEventListener('click', () => {
        $search_bar.style.display = "none"
        arrow.style.display = "none"
    })
}

function backHome() {
    const bar_arcoiris_container = document.querySelector('#bar-arcoiris');
    const scroll = document.documentElement.scrollTop;
    const icon = document.querySelector('.back-home-container');
    const btn_list = document.querySelector('.list');

    icon.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    if (scroll > 50) {
        icon.style.display = "block";
        bar_arcoiris_container.style.position = "fixed";
        bar_arcoiris_container.style.marginTop = "-38px";
        bar_arcoiris_container.style.zIndex = "900";
        bar_arcoiris_container.style.width = "100%";
        btn_list.style.top = "92px"

        if (window.innerWidth < 550) {
            bar_arcoiris_container.style.position = "fixed";
            bar_arcoiris_container.style.marginTop = "0px";
            bar_arcoiris_container.style.zIndex = "900";
            bar_arcoiris_container.style.width = "100%";
        }

    } else {
        icon.style.display = "none";
        btn_list.style.top = "130px"
        bar_arcoiris_container.style.position = "relative";
        bar_arcoiris_container.style.marginTop = "0";
        bar_arcoiris_container.style.zIndex = "900";
        bar_arcoiris_container.style.width = "100%";

    }
}
window.addEventListener("scroll", backHome)
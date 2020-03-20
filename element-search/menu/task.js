let links = document.getElementsByClassName("menu__link");


for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        let subMenu = links[i].closest('li').querySelectorAll('ul.menu_sub');
        if (subMenu.length === 1) {
            if (subMenu[0].classList.contains('menu_active')) {
                subMenu[0].classList.remove('menu_active');
            } else {
                let menuActive = document.getElementsByClassName('menu_active');
                if (menuActive.length >= 1) {
                    menuActive[0].classList.remove('menu_active');
                }
                subMenu[0].classList.add('menu_active');
            }
            return false;
        }
    }
}
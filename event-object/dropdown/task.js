let menu = document.getElementsByClassName('dropdown__value');

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function (event) {
        let dropdownList = event.target.nextElementSibling;
        hideActiveLists()
        showMenu(dropdownList);

        let links = dropdownList.getElementsByClassName('dropdown__link');

        for (let m = 0; m < links.length; m++) {
            links[m].onclick = function () {
                menu[i].textContent = links[m].textContent;
                hideActiveLists()
                return false;
            }
        }
    })
}

function showMenu(list) {
    if (!list.classList.contains('dropdown__list_active')) {
        list.classList.add('dropdown__list_active');
    }
}

function hideActiveLists() {
    let activeLists = document.getElementsByClassName('dropdown__list_active');
    if (activeLists.length > 0) {
        for (let i = 0; i < activeLists.length; i++) {
            activeLists[i].classList.remove('dropdown__list_active');
        }
    }
}


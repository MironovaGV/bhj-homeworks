let checkbox = document.getElementsByClassName('interest__check');

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function (event) {
        let input = event.target;
        let isSelect = input.checked;
        let currentLi = input.closest('li.interest');
        selectChildren(currentLi, isSelect);
        selectParent(currentLi);
    })
}

function selectChildren(li, isSelect) {
    let checkboxUl = li.querySelector('ul.interests');
    if (checkboxUl != null) {
        for (let i = 0; i < checkboxUl.children.length; i++) {
            let childrenLi = checkboxUl.children[i];
            childrenLi.querySelector('input.interest__check').checked = isSelect;
            selectChildren(childrenLi, isSelect)
        }
    }
}

function selectParent(li) {
    let currentUl = li.closest('ul');
    let parentLi = currentUl.closest('li.interest');
    if (parentLi != null) {
        let currentsLi = currentUl.querySelectorAll('li.interest');
        let parentInput = parentLi.querySelector('input.interest__check');

        let isAllChecked = true;

        for (let i = 0; i < currentsLi.length; i++) {
            isAllChecked = currentsLi[i].querySelector('input.interest__check').checked;

            if (!isAllChecked) {
                parentInput.indeterminate = true;
                break;
            }
        }

        if (isAllChecked) {
            parentInput.indeterminate = false;
            parentInput.checked = true;
        }

        selectParent(parentLi);
    }
}
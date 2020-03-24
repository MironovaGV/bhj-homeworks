let tabBlocks = document.getElementsByClassName('tabs');

for (let tabBlockIndex = 0; tabBlockIndex < tabBlocks.length; tabBlockIndex++) {
    let tabs = Array.from(tabBlocks[tabBlockIndex].getElementsByClassName('tab__navigation')[0].children);

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function (event) {
            let parent = event.target.parentElement;
            let contents = parent.nextElementSibling.children;
            let activeTabs = parent.getElementsByClassName('tab_active');

            hideTabs(tabs, activeTabs, contents);

            if (!tabs[i].classList.contains('tab_active')) {
                tabs[i].classList.add('tab_active');
                contents[i].classList.add('tab__content_active');
            }
        }
    }
}

function hideTabs(tabs, activeTabs, contents) {
    for (let i = 0; i < activeTabs.length; i++) {
        let tabIndex = tabs.indexOf(activeTabs[i]);
        contents[tabIndex].classList.remove('tab__content_active');
        activeTabs[i].classList.remove('tab_active');
    }
}
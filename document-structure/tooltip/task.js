let hasTooltipLinks = document.getElementsByClassName('has-tooltip');


for (let i = 0; i < hasTooltipLinks.length; i++) {
    hasTooltipLinks[i].onclick = function () {
        return false;
    }

    hasTooltipLinks[i].addEventListener('click', function (event) {
        let tooltipActive = document.getElementsByClassName('tooltip_active');
        let target = event.target;
        let next = target.nextElementSibling;
        let coordinates = target.getBoundingClientRect();
        tooltipActivRemove(tooltipActive);

        if (next == null || !next.classList.contains('tooltip')) {
            let tooltipText = target.title;
            let tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip_active';
            tooltip.style = `left: ${coordinates.left}px; top: ${coordinates.top + target.offsetHeight}px`;
            tooltip.innerHTML = tooltipText;
            tooltip.dataset.position = 'right';
            target.after(tooltip);
        }
    })
}

function tooltipActivRemove(tooltipActive) {

    if (tooltipActive.length > 0) {
        for (let i = 0; i < tooltipActive.length; i++) {
            tooltipActive[i].remove();
        }
    }
}

addEventListener('scroll', function () {
    let tooltipActive = document.getElementsByClassName('tooltip_active')[0];
    if (tooltipActive) {
        let target = tooltipActive.previousElementSibling;
        let coordinates = target.getBoundingClientRect();
        tooltipActive.style = `left: ${coordinates.left}px; top: ${coordinates.top + target.offsetHeight}px`;
    }
});
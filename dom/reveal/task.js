let reveal = Array.from(document.getElementsByClassName('reveal'));

for (let i = 0; i < reveal.length; i++) {
	addEventListener('scroll', function () {
		let bounding = reveal[i].getBoundingClientRect();
		console.log(window.innerHeight, document.documentElement.clientHeight);
		if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
			reveal[i].classList.add('reveal_active');
		} else {
			reveal[i].classList.remove('reveal_active');
		}

	})
}

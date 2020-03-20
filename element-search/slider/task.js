let slider = document.getElementsByClassName('slider__item');
let sliderArrows = document.getElementsByClassName('slider__arrow');
let dots = document.getElementsByClassName('slider__dot');
let acitveSliderClassName = 'slider__item_active';
let activeDotClassName = 'slider__dot_active';


function getActiveIndex(collection, className) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].classList.contains(className)) {
            return i;
        }
    }
}

for (let i = 0; i < sliderArrows.length; i++) {
    sliderArrows[i].onclick = function () {
        let activeSlideNumber = getActiveIndex(slider, acitveSliderClassName);

        if (slider[activeSlideNumber].classList.contains(acitveSliderClassName)) {
            slider[activeSlideNumber].classList.remove(acitveSliderClassName);
            dots[activeSlideNumber].classList.remove(activeDotClassName);

            if (sliderArrows[i].classList.contains('slider__arrow_prev')) {
                if (activeSlideNumber === 0) {
                    slider[slider.length - 1].classList.add(acitveSliderClassName);
                } else {
                    slider[activeSlideNumber - 1].classList.add(acitveSliderClassName);
                }
            } 

            if (sliderArrows[i].classList.contains('slider__arrow_next')) {
                if (activeSlideNumber === slider.length - 1) {
                    slider[0].classList.add(acitveSliderClassName);
                    dots[0].classList.add(activeDotClassName);
                } else {
                    slider[activeSlideNumber + 1].classList.add(acitveSliderClassName);
                    dots[activeSlideNumber + 1].classList.add(activeDotClassName);
                }
            }

        }
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        let activeDot = getActiveIndex(dots, activeDotClassName);

        if (i !== activeDot) {
            dots[activeDot].classList.remove(activeDotClassName);
            slider[activeDot].classList.remove(acitveSliderClassName);
            dots[i].classList.add(activeDotClassName);
            slider[i].classList.add(acitveSliderClassName);
        }
        
    }
}
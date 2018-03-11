var slides = document.getElementsByClassName('slide'),
    left_arrow = document.getElementsByClassName('arrow-left')[0],
    right_arrow = document.getElementsByClassName('arrow-right')[0],
    active_slide = document.getElementsByClassName('active-slide')[0],
    slidesQuantity = slides.length,
    clickLimiter = 0,
    futureCurrentSlide;

// TO DO: zamienić nazwy zmiennych futureCurrentSlide na bardziej odpowiednie, dodać nową zmienną np. currentSlide
right_arrow.onclick = function () {
    clickLimiter = clickLimiter + 1;

    if (clickLimiter === 1) {

        active_slide = document.getElementsByClassName('active-slide')[0];

        futureCurrentSlide = active_slide.getAttribute('data-slider-number');

        active_slide.classList.add('next-slide');

        if (futureCurrentSlide == slidesQuantity) {
            futureCurrentSlide = 0;

            slides[futureCurrentSlide].classList.add('active-slide');
        } else {
            slides[futureCurrentSlide].classList.add('active-slide');
        }

        setTimeout(function () {
            active_slide.classList.remove('active-slide');
            active_slide.classList.remove('next-slide');

            clickLimiter = 0;
        }, 2900);
    }
};

left_arrow.onclick = function () {
    clickLimiter = clickLimiter + 1;

    if (clickLimiter === 1) {

        active_slide = document.getElementsByClassName('active-slide')[0];

        futureCurrentSlide = active_slide.getAttribute('data-slider-number');

        active_slide.classList.add('prev-slide');

        if (futureCurrentSlide == 1) {
            futureCurrentSlide = slidesQuantity - 1;

            slides[futureCurrentSlide].classList.add('active-slide');
        } else {
            slides[futureCurrentSlide - 2].classList.add('active-slide');
        }

        setTimeout(function () {
            active_slide.classList.remove('active-slide');
            active_slide.classList.remove('prev-slide');

            clickLimiter = 0;
        }, 2900);
    }
};

for (var i = 1; i <= slidesQuantity; i++) {
    slides[i - 1].setAttribute('data-slider-number', i);
}

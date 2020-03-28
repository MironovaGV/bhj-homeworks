let fontSizeButtons = document.getElementsByClassName('font-size');
let book = document.getElementById('book');
for (let i = 0; i < fontSizeButtons.length; i++) {
    fontSizeButtons[i].onclick = function () {
        return false;
    }

    fontSizeButtons[i].addEventListener('click', function () {
        hideClass();
        if (!fontSizeButtons[i].classList.contains('font-size_active')) {
            fontSizeButtons[i].classList.add('font-size_active');
        }
        let dataSize = fontSizeButtons[i].dataset.size;

        switch (dataSize) {
            case 'big':
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
                break;
            case 'small':
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
                break;
            default:
                book.classList.remove('book_fs-small', 'book_fs-big');
        }
    });
}

function hideClass() {
    let activeFonts = document.getElementsByClassName('font-size_active');
    if (activeFonts.length > 0) {
        for (let i = 0; i < activeFonts.length; i++) {
            activeFonts[i].classList.remove('font-size_active');
        }
    }
}
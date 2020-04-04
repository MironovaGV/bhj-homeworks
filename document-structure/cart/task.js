let cartProducts = document.getElementsByClassName('cart__products')[0];
let controls = document.getElementsByClassName('product__quantity-control');
let productAddButtons = document.getElementsByClassName('product__add');

hideCart();

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function (event) {
        let quantityControl = event.target;
        let quantityValue = quantityControl.parentNode.querySelector('.product__quantity-value');

        if (quantityControl.classList.contains('product__quantity-control_inc')) {
            quantityValue.textContent++;
        } else {

            if (quantityValue.textContent > 1) {
                quantityValue.textContent--;
            }
        }
    })
}

for (let i = 0; i < productAddButtons.length; i++) {
    productAddButtons[i].addEventListener('click', function () {
        let productControls = productAddButtons[i].parentNode.parentNode;
        let parent = productControls.parentElement;
        let quantity = parseInt(productControls.querySelector('.product__quantity-value').textContent);
        let id = parent.dataset.id;
        let img = parent.querySelector('.product__image').src;

        addProduct(id, quantity, img);
    })
}

function addProduct(id, quantity, img) {
    cartProducts.parentNode.style = '';
    let currentProduct = cartProducts.querySelector(`[data-id="${id}"]`);

    if (currentProduct == null) {
        let product = document.createElement('div');
        product.classList.add('cart__product');
        product.dataset.id = id;
        let imgCart = document.createElement('img');
        imgCart.classList.add('cart__product-image');
        imgCart.src = img;
        product.append(imgCart);
        let productCount = document.createElement('div');
        productCount.classList.add('cart__product-count');
        productCount.append(quantity);
        product.append(productCount);
        let delteButton = document.createElement('div');
        delteButton.classList.add('cart__prodict-delete');
        delteButton.innerHTML = '&times;';
        product.append(delteButton);

        cartProducts.append(product);
        addDelteButton(delteButton);
    } else {
        currentProduct.childNodes[1].textContent = parseInt(currentProduct.childNodes[1].textContent) + quantity;
    }
}

function addDelteButton(button) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.remove();
        hideCart();
    });
}

function hideCart() {
    cartProducts = document.getElementsByClassName('cart__products')[0];

    if (cartProducts.children.length === 0) {
        cartProducts.parentNode.style.display = 'none';
    };
}


import { updateCartCount } from "../application/updateCart";

export function addLabelCart() {
    const cartCounter = document.createElement('div');
    cartCounter.className = 'cart-counter';
    cartCounter.innerHTML = `<div class="cart-counter">
            <i class="fas fa-shopping-cart"></i> <span id="cartCount">0</span>
        </div>`;

    document.body.appendChild(cartCounter);

    // updateCartCount();

}
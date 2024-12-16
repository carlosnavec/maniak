export function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCount.textContent = count;
}

export function updateCart() {
    console.log('Producto añadido al carrito');
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    count++;
    localStorage.setItem('cartCount', count);
    updateCartCount();
}

export function resetCartCount() {
    localStorage.setItem('cartCount',0);
}
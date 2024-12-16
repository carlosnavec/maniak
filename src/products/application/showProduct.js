import { updateCart } from '../../cart/application/updateCart';
import { products } from '../domain/products';

export function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    const productModal = document.getElementById('productModal');
    productModal.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price} €</p>
        <button class="add-to-cart" onclick="addToCart()"><span class="add-to-cart-text">Añadir al carrito<span></button>
        <button class="close-modal" onclick="closeModal()"><i class="fas fa-times"></i></button>
    `;
    productModal.style.display = 'block';

    document.querySelectorAll('.add-to-cart').forEach(button => {
        addCartIcon(button);
        button.addEventListener('click', () => {
        const icon = button.querySelector('.icon');
        const originalText = 'Añadir al carrito';
        const addedText = 'Añadido';

        const cartText = button.querySelector('.add-to-cart-text');

        // Paso 1: Fundido del texto "Añadir al carrito"
        cartText.classList.add('fade-out');
        setTimeout(() => {
            cartText.innerHTML = addedText;
            icon.classList.add('move-right');
            setTimeout(() => {
                cartText.classList.add('fade-in');
                cartText.classList.remove('fade-out');
            }, 500);
        }, 500);
    });
    });
}

// Función para añadir el icono de carrito al botón
function addCartIcon(button) {
    const icon = document.createElement('span');
    icon.className = 'icon';
    icon.innerHTML = '<i class="fas fa-shopping-cart"></i>'; // Icono de carrito de Font Awesome
    button.prepend(icon);
}

window.closeModal = function() {
    const productModal = document.getElementById('productModal');
    productModal.style.display = 'none';
}

window.addToCart = function() {
    updateCart();
    setTimeout(() => {
        closeModal();
    }, 2000);
    
}
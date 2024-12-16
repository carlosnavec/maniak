import '../styles.css';
import { products } from './domain/products';

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');

function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price} €</p>
            <button onclick="showProduct(${product.id})">Ver detalles</button>
        `;
        productList.appendChild(productCard);
    });
}

function filterProducts() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return (category === 'all' || product.category === category) &&
               product.name.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
}

function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    productModal.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price} €</p>
        <button class="add-to-cart" onclick="addToCart()">Añadir al carrito</button>
        <button onclick="closeModal()">Cerrar</button>
    `;
    productModal.style.display = 'block';
}

function closeModal() {
    productModal.style.display = 'none';
}

function addToCart() {
    alert('Producto añadido al carrito');
}

window.showProduct = showProduct;
window.closeModal = closeModal;
window.addToCart = addToCart;

categoryFilter.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

displayProducts(products);
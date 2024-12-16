export function displayProducts(products, productList) {
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
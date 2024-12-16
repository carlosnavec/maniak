import { displayProducts } from './displayProducts';

export function filterProducts(products, category, searchTerm) {
    const filteredProducts = products.filter(product => {
        return (category === 'all' || product.category === category) &&
               product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const productList = document.getElementById('productList');
    displayProducts(filteredProducts, productList);
}
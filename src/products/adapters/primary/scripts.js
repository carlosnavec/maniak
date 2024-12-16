import './styles.css';
import './modal.css';
import '../../../cart/adapters/styles.css';
import { products } from '../../domain/products';
import { displayProducts } from '../../application/displayProducts';
import { filterProducts } from '../../application/filterProducts';
import { showProduct } from '../../application/showProduct';
import { getCategories } from '../../application/getCategories';
import { addLabelCart } from '../../../cart/adapters/scripts';
import { resetCartCount } from '../../../cart/application/updateCart';

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');

window.showProduct = showProduct;

function updateCategoryFilterOptions() {
    const categories = getCategories(products);
    categoryFilter.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join('');
}

updateCategoryFilterOptions();


categoryFilter.addEventListener('change', () => filterProducts(products, categoryFilter.value, searchInput.value));
searchInput.addEventListener('input', () => filterProducts(products, categoryFilter.value, searchInput.value));

displayProducts(products, productList);

function closeModal() {
    productModal.style.display = 'none';
}

addLabelCart();
resetCartCount();

window.closeModal = closeModal;
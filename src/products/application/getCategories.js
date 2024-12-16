export function getCategories(products) {
    const categories = products.reduce((acc, product) => {
        if (!acc.includes(product.category)) {
            acc.push(product.category);
        }
        return acc;
    }, ['all']);
    return categories;
}
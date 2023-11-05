export const getProductsForGender = (products, gender) => {
    if (gender) {
        return products.filter(
            (product) => product.gender === gender.toLowerCase()
        );
    }
    return products;
};

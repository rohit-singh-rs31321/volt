export const getSortedProducts = (products, sortBy) => {
    if (sortBy === "LOW_TO_HIGH") {
        return [...products].sort(
            (product1, product2) => product1.price - product2.price
        );
    }
    if (sortBy === "HIGH_TO_LOW") {
        return [...products].sort(
            (product1, product2) => product2.price - product1.price
        );
    }

    return products;
};

export const getSearchProducts = (products, searchTerm) => {
    if (searchTerm) {
        return [...products].filter(
            (product) =>
                product.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                product.details
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                product.gender.toLowerCase() === searchTerm.toLowerCase()
        );
    }

    return products;
};

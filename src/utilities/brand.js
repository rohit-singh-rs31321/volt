export const getBrandedProducts = (products, nike, adidas, puma, vans) => {
    const filteredList = [];

    if (
        nike === false &&
        adidas === false &&
        puma === false &&
        vans === false
    ) {
        return products;
    }

    if (nike) {
        let newList = products.filter((product) => product.title === "Nike");

        filteredList.push(...newList);
    }

    if (adidas) {
        let newList = products.filter((product) => product.title === "Adidas");

        filteredList.push(...newList);
    }

    if (puma) {
        let newList = products.filter((product) => product.title === "Puma");

        filteredList.push(...newList);
    }

    if (vans) {
        let newList = products.filter((product) => product.title === "Vans");

        filteredList.push(...newList);
    }

    return filteredList;
};

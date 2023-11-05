import { getProductsForGender } from "../utilities/gender";
import { getRatedProducts } from "../utilities/rating";
import { getBrandedProducts } from "../utilities/brand";
import { getSortedProducts } from "../utilities/sort";
import { getSearchProducts } from "./search-products";

export const getFilteredProducts = (products, state) => {
    const { sortBy, gender, rating, brands, searchTerm } = state;
    const { nike, adidas, puma, vans } = brands;

    const searchedProducts = getSearchProducts(products, searchTerm);

    const productsForGender = getProductsForGender(searchedProducts, gender);

    const ratedProducts = getRatedProducts(productsForGender, rating);

    const brandedProducts = getBrandedProducts(
        ratedProducts,
        nike,
        adidas,
        puma,
        vans
    );

    const sortedProducts = getSortedProducts(brandedProducts, sortBy);

    return sortedProducts;
};

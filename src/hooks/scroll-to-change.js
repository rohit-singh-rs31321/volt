import { useEffect } from "react";

export const useScrollToChangeColor = () => {
    const scrollHeader = () => {
        const header = document.querySelector(".header");

        window.scrollY >= 50
            ? header.classList.add("scroll-header")
            : header.classList.remove("scroll-header");
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
    }, []);
};

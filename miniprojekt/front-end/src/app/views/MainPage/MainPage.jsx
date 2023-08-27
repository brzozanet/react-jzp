import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import productImage from "/public/products/sweater.jpg";
import heroImage from "/public/summersale.jpg";

async function MainPage() {
    const products = [
        {
            id: 1,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            images: [productImage.src, productImage.src, productImage.src],
        },
        {
            id: 2,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            images: [productImage.src, productImage.src, productImage.src],
        },
        {
            id: 3,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-shirt 2",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            images: [productImage.src, productImage.src, productImage.src],
        },
        {
            id: 4,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            name: "T-shirt 3",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            images: [productImage.src, productImage.src, productImage.src],
        },
    ];

    return (
        <>
            <Hero heroImage={heroImage.src} />
            <Bestsellers products={products} />
        </>
    );
}

export { MainPage };

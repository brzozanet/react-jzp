import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import SweaterImg from "../../assets/products/sweater.jpg";

function Favourites() {
    const products = [
        {
            id: 2,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg.src],
        },
        {
            id: 3,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg.src],
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg.src],
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg.src],
        },
    ];
    return <FavouritesList products={products} />;
}

export { Favourites };

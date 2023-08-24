import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

async function MainPage({ gender = "women", currency = "currency" }) {
    const PATH_TO_ENDPOINT_MAPPING = {
        kobieta: "women",
        mezczyzna: "men",
        dziecko: "children",
    };

    const data = await fetch(
        `http://localhost:3000/${PATH_TO_ENDPOINT_MAPPING[gender]}`
    ).then((res) => res.json());

    return (
        <>
            <Hero heroImage={data.heroImageUrl} />
            <Bestsellers products={data.bestsellers} currency={currency} />
        </>
    );
}

export { MainPage };

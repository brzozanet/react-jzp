import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

import { Layout } from "../../components/Layout/Layout";

async function MainPage({ gender = "women" }) {
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
            <Bestsellers products={data.bestsellers} />
        </>
    );
}

export { MainPage };

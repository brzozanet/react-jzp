import { MainPage } from "../views/MainPage/MainPage";

export default function Home({ params }) {
    return <MainPage gender={params.gender} currency={params.currency} />;
}

export async function generateStaticParams() {
    return [
        { gender: "kobieta", currency: "PLN" },
        { gender: "kobieta", currency: "USD" },
        { gender: "mezczyzna", currency: "PLN" },
        { gender: "mezczyzna", currency: "USD" },
        { gender: "dziecko", currency: "PLN" },
        { gender: "mezczyzna", currency: "USD" },
    ];
}

import { MainPage } from "../views/MainPage/MainPage";

export default function Home({ params }) {
    return <MainPage gender={params.gender} />;
}

export async function generateStaticParams() {
    return [
        { gender: "kobieta" },
        { gender: "mezczyzna" },
        { gender: "dziecko" },
    ];
}

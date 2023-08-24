import { MainPage } from "../views/MainPage/MainPage";

export default function Home({ params }) {
    console.log(params.gender);
    const gender = params.gender || "kobieta";
    return <MainPage gender={params.gender} />;
}

export async function generateStaticParams() {
    return [
        { gender: "kobieta" },
        { gender: "mezczyzna" },
        { gender: "dziecko" },
    ];
}

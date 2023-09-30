const PARAM_TO_WORD = {
    mezczyzna: "Mężczyzna",
    kobieta: "Kobieta",
    dziecko: "Dziecko",
};

export default function DynamicRoute({ params }) {
    return <h2>{PARAM_TO_WORD[params.gender]}</h2>;
}

export function generateStaticParams() {
    return [
        {
            gender: "kobieta",
        },
        {
            gender: "mezczyzna",
        },
        {
            gender: "dziecko",
        },
    ];
}

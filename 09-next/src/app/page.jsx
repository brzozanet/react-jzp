import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";

export default function Home() {
  return (
    <>
      <h1>Hello Next!</h1>
      <h2>Strona główna</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam
        massa erat at dui. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas.
      </p>
      <LanguageSelector />
    </>
  );
}

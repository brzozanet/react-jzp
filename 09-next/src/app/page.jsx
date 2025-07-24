import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Hello Next!</h1>
      <h2>Strona główna</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam
        massa erat at dui. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Integer ac sem nec urna cursus faucibus. Etiam euismod,
        justo at facilisis cursus, enim erat dictum urna, nec dictum velit enim
        non erat.
      </p>
      <p>
        Morbi euismod, sapien nec laoreet cursus, enim erat dictum urna, nec
        dictum velit enim non erat. Nullam ac urna eu felis dapibus condimentum
        sit amet a augue. Sed non neque elit.
      </p>
      <Footer />
    </>
  );
}

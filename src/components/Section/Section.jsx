import "./Section.css";

export function Section() {
  const handleButtonModalOpenClick = () => {
    console.log("click");
  };

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => handleButtonModalOpenClick()}>Otwórz</button>
    </section>
  );
}

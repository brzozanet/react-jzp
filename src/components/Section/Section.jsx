import "./Section.css";

export function Section({ setIsModalShown }) {
  const handleButtonModalOpenClick = () => {
    console.log("click");
    setIsModalShown(true);
  };

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => handleButtonModalOpenClick()}>Otwórz</button>
    </section>
  );
}

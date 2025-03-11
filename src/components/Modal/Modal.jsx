import "./Modal.css";

export function Modal({ setIsModalShown }) {
  const handleButtonModalCloseClick = () => {
    console.log("click");
    setIsModalShown(false);
  };

  return (
    <div className="modal">
      <span>Sukces! 🎉</span>
      <button onClick={() => handleButtonModalCloseClick()}>Zamknij</button>
    </div>
  );
}

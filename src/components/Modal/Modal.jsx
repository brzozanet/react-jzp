import "./Modal.css";

export function Modal({ setIsModalShown }) {
  const handleModalCloseClick = () => {
    console.log("click close");
    setIsModalShown(false);
  };
  return (
    <div className="modal">
      <span>Sukces! 🎉</span>
      <button onClick={() => handleModalCloseClick()}>Zamknij</button>
    </div>
  );
}

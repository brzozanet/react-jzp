import { useState } from "react";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";
import { ModalShownContext } from "./context/ModalShownContext";
import "./App.css";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <ModalShownContext value={[isModalShown, setIsModalShown]}>
        <h1>Witaj w lekcji o React Portal!</h1>
        <Main />
        <footer>zrozumiecReact.pl ©</footer>
        {isModalShown && <Modal />}
      </ModalShownContext>
    </>
  );
}

export default App;

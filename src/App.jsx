import { useContext, useState } from "react";
import { Main } from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";
import "./App.css";
import { ModalShownContext } from "./context/ModalShownContext";

function App() {
  const isModalShown = useContext(ModalShownContext);

  return (
    <>
      <h1>Witaj w lekcji o React Portal!</h1>
      <Main />
      <footer>zrozumiecReact.pl ©</footer>
      {isModalShown && <Modal />}
    </>
  );
}

export default App;

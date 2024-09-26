import { useState } from "react";
import css from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [errorText, setErrorText] = useState(null);

  const handleError = (error) => {
    setErrorText(error.message);
    setTimeout(() => {
      setErrorText(null);
    }, 3000);
  };

  return (
    <main className={css.main}>
      {errorText ? (
        <ErrorMessage>{errorText}</ErrorMessage>
      ) : (
        <Panel setErrorText={setErrorText} handleError={handleError} />
      )}
    </main>
  );
}

export default App;

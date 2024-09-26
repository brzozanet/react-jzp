import { useState } from "react";
import css from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [errorText, setErrorText] = useState(null);

  return (
    <main className={css.main}>
      {errorText ? (
        errorText && <ErrorMessage>{errorText}</ErrorMessage>
      ) : (
        <Panel setErrorText={setErrorText} />
      )}
    </main>
  );
}

export default App;

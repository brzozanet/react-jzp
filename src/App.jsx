import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);

  const handleSpoilerShowClick = () => {
    setIsSpoilerShown(true);
    setIsWarningShown(false);
  };

  const handleShowWarningClick = () => {
    setIsWarningShown(false);
  };

  return (
    <>
      <h1>Wataha, sezon 1</h1>
      <h2>Rok produkcji: 2015</h2>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga! Opis fabuły zawiera spoilery!{" "}
          <button onClick={handleShowWarningClick}>X</button>
        </p>
      )}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        quidem debitis assumenda veniam ab nostrum vel, alias, cupiditate
        doloremque id perspiciatis tempore.
      </p>
      {isSpoilerShown ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste,
          laboriosam ipsa, saepe nemo sequi fugit at cumque, minima sint autem
          numquam. Mollitia, laboriosam modi quae officiis, fugiat sit
          temporibus quas provident nam blanditiis praesentium illo doloremque
          sapiente corrupti repudiandae accusamus laborum.
        </p>
      ) : (
        <button onClick={handleSpoilerShowClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;

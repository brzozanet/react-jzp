function App() {
  const handleClick = () => {
    alert("Button click!");
  };

  return (
    <>
      <h1>Wataha, sezon 1</h1>
      <h2>Rok produkcji: 2015</h2>
      <h2>Fabuła</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        quidem debitis assumenda veniam ab nostrum vel, alias, cupiditate
        doloremque id perspiciatis tempore, natus totam reprehenderit maxime
        blanditiis aut quaerat eveniet.
      </p>
      <button onClick={handleClick}>Pokaż spoiler</button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, culpa?
        Ex consectetur vero cupiditate! Corporis non, necessitatibus velit alias
        similique dolor ad a veniam maiores, amet voluptas harum quo quia!
      </p>
    </>
  );
}

export default App;

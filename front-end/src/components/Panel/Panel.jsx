import { useEffect, useState } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import css from "./Panel.module.css";
import { Loader } from "../Loader/Loader";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ");
        console.log(data);
        return data;
      })
      .then((data) => {
        setData(data);
        // NOTE: setTimeout to show the loader
        // setIsLoading(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => console.error(error));
  }, []);

  const addWord = (newItem) => {
    console.log(newItem);
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => setData((prevState) => [...prevState, data]));
  };

  const deleteWord = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/words/${id}`, {
      method: "DELETE",
    }).then(setData((prevState) => prevState.filter((word) => word.id !== id)));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={css.section}>
          <Form addWord={addWord} />
          <List data={data} deleteWord={deleteWord} />
        </section>
      )}
    </>
  );
}

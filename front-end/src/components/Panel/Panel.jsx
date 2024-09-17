import { useEffect, useState } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import css from "./Panel.module.css";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { FilterButton } from "../FilterButton/FilterButton";

const API_URL = "http://localhost:3000";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/words`)
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
      .catch((error) => console.error("BŁĄD!", error));
  }, []);

  const addWord = (newItem) => {
    fetch(`${API_URL}/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Błąd podczas dodawania słowa");
        }
      })
      .then((data) => {
        setData((prevState) => [...prevState, data]);
      })
      .catch((error) => {
        setErrorText(error.message);
        setTimeout(() => {
          setErrorText(null);
        }, 3000);
      });
  };

  const deleteWord = (id) => {
    fetch(`${API_URL}/words/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setData((prevState) => prevState.filter((word) => word.id !== id));
        } else {
          throw Error("Błąd podczas usuwania słowa");
        }
      })
      .catch((error) => {
        setErrorText(error.message);
        setTimeout(() => {
          setErrorText(null);
        }, 3000);
      });
  };

  const handleSelectCategory = (categoryName) => {
    fetch(`${API_URL}/words11?category=${categoryName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Błąd podczas wyświetlania");
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        setErrorText(error.message);
        setTimeout(() => {
          setErrorText(null);
        }, 3000);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {errorText && <ErrorMessage>{errorText}</ErrorMessage>}
          <section className={css.section}>
            <Form addWord={addWord} />
            <div className={css.filters}>
              <FilterButton>Wszystkie</FilterButton>
              <FilterButton onClick={() => handleSelectCategory("noun")}>
                Rzeczowniki
              </FilterButton>
              <FilterButton onClick={() => handleSelectCategory("verb")}>
                Czasowniki
              </FilterButton>
            </div>
            <List data={data} deleteWord={deleteWord} />
          </section>
        </>
      )}
    </>
  );
}

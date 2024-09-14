import { useEffect, useState } from "react";
import { List } from "../List/List";
import css from "./Panel.module.css";
import { Loader } from "../Loader/Loader";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((response) => response.json())
      .then((data) => {
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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={css.section}>
          <List data={data}></List>
        </section>
      )}
    </>
  );
}

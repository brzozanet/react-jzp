import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetch(`${BASE_URL}/${url}`)
      .then((response) => {
        if (response.ok) {
          setError(null);
          return response.json();
        }
        throw new Error("Coś poszło nie tak...");
      })

      .then((response) => {
        if (isCancelled) {
          return;
        }
        setData(response);
      })

      .catch((error) => {
        setError(error);
      });

    return () => {
      isCancelled = true;
    };
  }, [url]); // NOTE: do wyjaśnienia w teorii

  return { data, error };
};

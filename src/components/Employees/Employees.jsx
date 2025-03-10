import { useEffect, useState } from "react";
import css from "./Employees.module.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function Employees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetch(`${BASE_URL}/employees.json`)
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
        setEmployees(response);
      })

      .catch((error) => {
        setError(error);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section className={css.section}>
      {error ? (
        error.message
      ) : (
        <table className={css.tableContainer}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>
                  {employee.name} {employee.last_name}
                </td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

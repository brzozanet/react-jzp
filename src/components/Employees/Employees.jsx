import { useGetData } from "../../hooks/useGetData";
import css from "./Employees.module.css";

export function Employees() {
  const { data: employees, error } = useGetData("employees.json");

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

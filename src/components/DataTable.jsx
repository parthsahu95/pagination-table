import React from "react";
import "../index.css";

const DataTable = ({ data, filteredData, currentPage, rowsPerPage }) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = currentPage * rowsPerPage;
  return (
    <div className="table-container">
      <table>
        <tr>
          <th>User Id</th>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </tr>

        {filteredData.length !== 0 &&
          filteredData.slice(startIndex, endIndex).map((todo) => {
            return (
              <tr>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td className="todo-title tooltip" title={todo.title}>
                  {todo.title}
                </td>
                <td className={todo.completed ? "red-text" : "green-text"}>
                  {todo.completed ? "Valid" : "Invalid"}
                </td>
              </tr>
            );
          })}
      </table>
      {data.length === 0 && (
        <div className="no-data-text">No data available</div>
      )}
    </div>
  );
};

export default DataTable;

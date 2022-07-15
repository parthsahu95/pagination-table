import { useState, useEffect } from "react";
import axios from "axios";

import Operations from "./components/Operations";
import DataTable from "./components/DataTable";
import Pagination from "./components/Pagination";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const [userFilter, setUserFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    await setData(response.data);
    setUserFilter("");
    setRowsPerPage(10);
    setCurrentPage(1);
    console.log("refreshed");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="main">
        <h2 className="heading">To Do Table</h2>
        <Operations
          data={data}
          getData={getData}
          userFilter={userFilter}
          rowsPerPage={rowsPerPage}
          setUserFilter={setUserFilter}
          setFilteredData={setFilteredData}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
        />
        <DataTable
          data={data}
          filteredData={filteredData}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
        <Pagination
          filteredData={filteredData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";

const Operations = ({
  data,
  getData,
  userFilter,
  rowsPerPage,
  setUserFilter,
  setFilteredData,
  setCurrentPage,
  setRowsPerPage,
}) => {
  const uniqueUserIds = [...new Set(data.map((todo) => todo.userId))];
  const maxRows = 15;
  const minRows = 0;

  const filterChangeHandler = (e) => {
    setUserFilter(e.target.value);
    setCurrentPage(1);
  };

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    if (inputValue > maxRows) {
      setRowsPerPage(maxRows);
    } else if (inputValue < minRows) {
      setRowsPerPage(minRows);
    } else setRowsPerPage(e.target.value);
  };

  useEffect(() => {
    let temp = data.filter((todo) =>
      userFilter ? String(todo.userId) === userFilter : true
    );
    setFilteredData(temp);
  }, [data, userFilter, setFilteredData]);

  return (
    <div className="operations">
      <div>
        Show{" "}
        <input
          className="rows-per-page-input"
          value={rowsPerPage}
          type="number"
          onChange={(e) => inputChangeHandler(e)}
        ></input>
        rows per page. {`(Max: ${maxRows})`}
      </div>
      <label className="filter-label" htmlFor="user-id-filter">
        Filter by User Id :
      </label>

      <select
        value={userFilter}
        onChange={(e) => {
          filterChangeHandler(e);
        }}
        name="user-id-filter"
        className="filter-dropdown"
      >
        <option value="">Show All</option>
        {uniqueUserIds.map((userId) => {
          return (
            <option key={userId} value={userId}>
              {userId}
            </option>
          );
        })}
      </select>
      <button onClick={getData} className="refresh-button">
        <i className="fa fa-refresh"></i> Refresh
      </button>
    </div>
  );
};

export default Operations;

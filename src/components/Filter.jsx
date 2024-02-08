import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div className="order-buttons">
          <p>Ordem alfabética: </p>
          <button className="ascd">Asc</button>
          <button className="remove">Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

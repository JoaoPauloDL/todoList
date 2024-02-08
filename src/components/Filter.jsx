import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div className="order-buttons">
            <p>Ordem alfabética: </p>
            <button className="asc">Asc</button>
            <button className="remove">Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import "../styles.css";

const Pagination = ({ namePerPage, totalName, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalName / namePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <>
        <ul className="paglist">
          <button className="button">Prev</button>

          {pageNumber.map((number) => (
            <li key={number} className="number">
              <button className="number-list" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}

          <button className="button">Next</button>
        </ul>
      </>
    </div>
  );
};

export default Pagination;

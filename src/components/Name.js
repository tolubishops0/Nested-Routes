import React from "react";
import "../styles.css";

const Names = ({ names, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {names.map((name) => (
        <li key={name.email} className="namelist">
          {name.name.title} {name.name.first} {name.name.last}
        </li>
      ))}
    </ul>
  );
};

export default Names;

import React from "react";

function List({ class_name, title }) {
  return <li className={class_name}>{title}</li>;
}

export default List;

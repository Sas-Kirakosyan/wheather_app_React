import React from "react";
import PropTypes from "prop-types";

function List({ class_name, title }) {
  return <li className={class_name}>{title}</li>;
}

List.propTypes = {
  class_name: PropTypes.string,
  title: PropTypes.string,
};
export default List;

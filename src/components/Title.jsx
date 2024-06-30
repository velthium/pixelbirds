"use client";

import PropTypes from "prop-types";

function Title(props) {
  return (
    <h1 className="h3 mb-5 p-5 custom-orange text-center">{props.title}</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

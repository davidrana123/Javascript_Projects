import React from "react";
import PropTypes from "prop-types";

const Proptypes = (props) => {
  return (
    <div>
      <h1>25_Proptype</h1>
      <h2>Props is {props.age}</h2>
      <h2>Name is {props.name}</h2>
    </div>
  );
};

Proptypes.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
};
export default Proptypes;

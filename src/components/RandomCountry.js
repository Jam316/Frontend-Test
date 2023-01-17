import React from "react";

const RandomCountry = ({ countryCode, onClickRandomCountry }) => {
  return (
    <button
      type="button"
      onClick={() => onClickRandomCountry()}
      className="btn"
      id="action-btn"
    >
      {`Get country: ${countryCode}`}
    </button>
  );
};

export default RandomCountry;

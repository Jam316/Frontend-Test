import React, { useState, useEffect, useCallback } from "react";

const RandomCountry = ({ countryCode, getTop3ReadBooks }) => {
  return (
    <div id="randomCountry">
      <button type="button" onClick={() => getTop3ReadBooks()}>
        {`Get country: ${countryCode}`}
      </button>
    </div>
  );
};

export default RandomCountry;

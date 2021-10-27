import React from "react";

const Filter = ({ value, changeFilter }) => (
  <>
        <label >Find contacts by name</label>
        <br/>
    <input
      
      type="text"
      value={value}
      onChange={changeFilter}
    ></input>
  </>
);

export default Filter
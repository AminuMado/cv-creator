import React from 'react';

function Task({ placeholder, id, value, index, handleChange }) {
  return (
    <input
      placeholder={placeholder}
      onChange={(event) => handleChange(event, id, index)}
      value={value}
    />
  );
}
export default Task;

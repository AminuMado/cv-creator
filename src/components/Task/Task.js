import React from 'react';

function Task({ placeholder, id, value }) {
  return (
    <input
      placeholder={placeholder}
      onChange={(event) => props.handleChange(event, id)}
      value={value}
    />
  );
}
export default Task;

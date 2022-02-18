import React from 'react';

function Task(props) {
  return (
    <input
      placeholder={props.placeholder}
      onChange={(event) => props.handleChange(event, props.id, props.index)}
      value={props.value}
    />
  );
}
export default Task;

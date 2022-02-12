import React from 'react';

function Button(props) {
  return (
    <button onClick={(e) => props.handleClick(e, id)}>{props.name}</button>
  );
}
export default Button;

import React from 'react';
import './Button.css';

function Button(props) {
  const { name, id, handleClick, classification } = props;
  return (
    <button
      className={classification == 'Add' ? 'add' : 'delete'}
      type="Button"
      onClick={(e) => handleClick(e, id)}
    >
      {name}
    </button>
  );
}
export default Button;

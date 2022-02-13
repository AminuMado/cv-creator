import React from 'react';

function Button(props) {
  const { name, id, handleClick, classification } = props;
  return (
    <button
      className={classification == 'Add' ? 'add' : 'delete'}
      onClick={(e) => handleClick(e, id)}
    >
      {name}
    </button>
  );
}
export default Button;

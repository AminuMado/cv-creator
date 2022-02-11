import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <div>
      <label for={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}
export default Input;

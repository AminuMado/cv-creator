import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.handleChange(event, props.id)}
      />
    </div>
  );
}
export default Input;

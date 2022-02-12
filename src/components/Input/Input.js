import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <div className="form-input">
      <label for={props.name}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) =>
          props.handleInputOnChange(event, props.category, props.name)
        }
      />
    </div>
  );
}
export default Input;

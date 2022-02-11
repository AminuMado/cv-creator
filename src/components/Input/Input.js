import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <div className="form-input">
      <label for={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) =>
          props.handleInputOnChange(event, props.category, props.id)
        }
      />
    </div>
  );
}
export default Input;

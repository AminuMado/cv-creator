import React from 'react';
import './Navitem.css';

function Navitem(props) {
  return (
    <div
      className="nav-item"
      onClick={(e) => {
        console.log(e.target);
      }}
    >
      {props.name}
    </div>
  );
}

export default Navitem;

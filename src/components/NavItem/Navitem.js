import React from 'react';
import './Navitem.css';

function Navitem(props) {
  return (
    <div
      className={
        props.active === props.name
          ? 'nav-item active'
          : 'nav-item hover-underline-animation'
      }
      onClick={(e) => {
        props.setActive(props.name);
      }}
    >
      {props.name}
    </div>
  );
}

export default Navitem;

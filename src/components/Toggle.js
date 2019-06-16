import React from 'react';

function Toggle(props) {
  return (
    <button className="toggle" onClick={props.onClick}>
      {props.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;

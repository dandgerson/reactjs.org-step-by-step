import React from 'react';

function Toggle(props) {
  return (
    <button className={props.isToggleOn ? 'toggle' : 'toggle pressed'} onClick={props.onClick}>
      {props.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;

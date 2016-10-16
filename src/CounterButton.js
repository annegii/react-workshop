import React from 'react';

function CounterButton(props) {
  let {onClick, count} = props;
  return (
    <button onClick={onClick}>Increase ({count})</button>
  );
}

export default CounterButton;
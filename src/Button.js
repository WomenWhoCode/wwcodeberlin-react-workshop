import React from 'react';

const Button = (props) => {
  const { color = "grey", onClick, children } = props
  // TODO: provide a default value for onClick as well
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    >
      {children}
    </button>
  )
}

export default Button;

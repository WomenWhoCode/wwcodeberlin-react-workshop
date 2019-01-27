import React from 'react';

const Button = (props) => {
  const { color = "grey", onClick = () => {}, children } = props
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

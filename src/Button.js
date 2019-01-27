import React from 'react';

const Button = (props) => {
  const { color, onClick, children } = props
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;

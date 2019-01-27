import React from 'react';

const Button = (props) => {
  const { color } = props
  return (
    <button style={{ backgroundColor: color }}></button>
  )
}

export default Button;

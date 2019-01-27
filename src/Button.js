import React from 'react';

const Button = (props) => {
  const { color, onClick } = props
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}></button>
  )
}

export default Button;

import React from 'react';

function Color({color, text}) {
  return (
    <p className='color' style={{color: `${color}`}}>{text.toUpperCase()}</p>
  )
}

export default Color
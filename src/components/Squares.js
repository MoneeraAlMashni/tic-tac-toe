import React from 'react'


const Squares = ({value , onClick}) => {
  return (
    <>
    <button className='square' onClick={onClick}>
      {value}</button>
    </>
  )
}

export default Squares


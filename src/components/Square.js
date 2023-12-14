import React from 'react'

const Square = (props) => {
  return (
    <div className="grid">
      {props.squares.map((value, index) => {
        return(
          <main key={index}>
            <div className="square" onClick={props.handleClick}></div>
          </main>
        )
      })}
    </div>
  )
}
export default Square

// onClick parameters or values would go in here and be accessed via props.
// This is also the reason why we need handleClick defined due to passing information from onClick through with handleClick
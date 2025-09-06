import React from 'react'

function card(title) {
  return (
    <div className="card">
       <h1>{title}</h1>
       <div className="hovercard">
        <img src={image} alt="" />
       </div>
    </div>
  )
}

export default card

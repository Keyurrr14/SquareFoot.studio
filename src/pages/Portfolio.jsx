import React from 'react'
import Industrial from "../assets/images/Industrial.webp"

function Portfolio() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img 
        src={Industrial} 
        alt="Industrial" 
        className="h-80 object-contain"
      />
    </div>
  )
}

export default Portfolio

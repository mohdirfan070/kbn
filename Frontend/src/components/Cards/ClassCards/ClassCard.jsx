import React from 'react'
import { Link } from 'react-router-dom'

export default function ClassCard(prop) {

  return (
  <>
  <div className="card-body max-w-[600px] m-auto my-1 border-2">
    <h2 className="card-title">Class: {prop.class} SEM</h2>
    <p>Keep track of attendance of every student in one click</p>
    <div className="card-actions justify-end">
     <Link to={"/attendance"}> <button className="btn btn-accent rounded-md">Take Now! <video className='h-6 rounded ' autoPlay loop src="../src/assets/GIF/studentsGIF.mp4" alt=""></video></button> </Link>
    </div>
  </div>
 
  </>
  )
}

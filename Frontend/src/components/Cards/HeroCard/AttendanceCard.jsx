import React from 'react'
import { Link } from 'react-router-dom'

export default function AttendanceCard() {
  return <>
  
    <div className="card card-compact  bg-base-100 w-96 rounded shadow-xl max-h-96">
  <figure>
    <img
     className='object-cover aspect-video'
      src="https://runningremote.com/wp-content/uploads/2021/05/employee-attendance-sheet.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Attendance</h2>
    <p>Keep track of attendance of every student in one click</p>
    <div className="card-actions justify-end">
     <Link to={"attendance"}> <button className="btn btn-accent rounded-md">Take Now! <img className='h-6' src="./src/assets/Images/attendanceIMG.png" alt="" /> </button> </Link>
    </div>
  </div>
</div>
  </>
}

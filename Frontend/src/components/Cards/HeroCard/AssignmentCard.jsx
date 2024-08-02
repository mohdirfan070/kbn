import React from 'react'

export default function AssignmentCard() {
  return <>
    <div className="card card-compact bg-base-100 rounded-md w-96 shadow-xl max-h-96">
  <figure>
    <img 
    className='object-cover aspect-video'
      src="https://cdn-61dc8321c1ac18f874f6c789.closte.com/wp-content/uploads/2015/05/ramadan-battle-plan.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Assignments</h2>
    <p>Keep track assignments of every student in one click</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary rounded-md">Track <img className='h-6  rounded-sm ' src="./src/assets/GIF/bookGIF.gif" alt="" /> </button>
    </div>
  </div>
</div>
  </>
}

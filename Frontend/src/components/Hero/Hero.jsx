import React from 'react'
import AttendanceCard from '../Cards/HeroCard/AttendanceCard'
import AssignmentCard from '../Cards/HeroCard/AssignmentCard'

export default function Hero() {
  return <>
  <div className='flex justify-center align-middle flex-wrap h-[100vh] px-2 pt-4 gap-1  bg-slate-200  w-full min-w-[299px] '>
    <AttendanceCard/>    
    <AssignmentCard/>
  </div>
  </>
   
}

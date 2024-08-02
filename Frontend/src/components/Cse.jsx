import React, {useState , useEffect , useRef} from 'react'
export default function Cse() {

  let classes = [1,2,3,4,5,6,7,8];
  
  return (
    <>

    <div className="classCardList py-1 w-full h-[100vh] flex justify-center mt-6 ">
    <ul className="  inline-block flex-wrap justify-center  ">
      {
        classes.map((ele,i)=>{
        return  <li key={i} className="m-1">
          <span className=" btn m-1  h-20  min-w-[275px]  bg-primary-content text-xl">
            {ele} SEM
          </span>
        </li>
        })
      }
   
    </ul>
    </div>
    </>
  )
}

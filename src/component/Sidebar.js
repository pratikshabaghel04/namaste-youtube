import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div>
        <div className='w-48 '>
            <h1 className=' p-2 font-normal text-center'> Home</h1>
            <ul>
              <li>muice</li>
              <li>Game</li>
              <li>Sports</li>
            </ul>
            <h1 className=' p-2 font-normal text-center'> Shorts</h1>
            <h1 className=' p-2 font-normal text-center'> Subscription</h1>
            <hr></hr>
            <h1 className=' p-2 font-normal text-center'>Library</h1>
            <h1 className=' p-2 font-normal text-center'>History</h1>
            <h1 className=' p-2 font-normal text-center'>Your Videos</h1>
            <h1 className=' p-2 font-normal text-center'>Watch Later</h1>
            <h1 className=' p-2 font-normal text-center'>Liked Videos</h1>
            <h1 className=' p-2 font-normal text-center'>Show More</h1>
            <hr></hr>
            <h1 className=' p-2 font-semibold text-xl text-center'>Subscription</h1>
        </div>
    </div>
  )
}

export default Sidebar
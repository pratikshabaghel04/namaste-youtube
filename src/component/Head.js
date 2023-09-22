import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
          onClick={()=>toggleMenuHandler()}
          className='h-8 cursor-pointer' alt='sidebar'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII='
          />
          <a href='/'>  
          <img className='h-16 -m-4 mx-2' alt='youtube-logo'
            src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg' 
            />
            </a>
        </div>
        <div className='col-span-10' >
            <input className='w-1/2 p-2 border border-gray-400 rounded-l-full' 
            type='text'
            placeholder=' Search'/>

            <button className='px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100'>
            🔎</button>
        </div>
        <div className='col-span-1'>
        <img className='h-8' alt='usericon' 
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOiD85vBVv50sGbhWjBtJbUqZE2DMalycOk1TDSB2DICsj7En5X8BfKqHrK7nfJwfo98&usqp=CAU'
             />
        </div>
    </div>
  )
}

export default Head
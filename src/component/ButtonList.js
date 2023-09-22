import React from 'react'
import Button from './Button'

const buttonlist = ['All', 'Game', 'Songs', 'Spritual', 'Computer Science',
'Cooking', 'Vlogs', 'Bhajan', 'Web Development', 'Shopping', ]

const ButtonList = () => {

  return (
    <div className='flex'>
      {buttonlist.map((ok, i) => (
        <Button key={i} name={ok}/>
      ))}
    </div>
  )
}

export default ButtonList
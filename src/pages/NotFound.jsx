import React from 'react'
import image from "../assets/404.jpg"
function NotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center p-8'>
      <img src={image} alt="404" />
    </div>
  )
}

export default NotFound
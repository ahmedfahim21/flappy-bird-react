import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Bird() {


    const {bird} = useSelector((state) => state.bird)
    
  return (
    <div className='bird' style={ { 
      top: bird.y,
      transform: `rotate(${bird.rotation}deg)`,
      }}>
        <img src="src/assets/bird.png" alt="" />
    </div>
  )
}

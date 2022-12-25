import React from 'react'
import { useSelector } from 'react-redux'

export default function Pipe() {

  const {startPosition, pipes} = useSelector((state) => state.pipe)


  return (
    <>
      {
        pipes.map((pipe, i) => {
          return (
            <div style={{position: 'relative'}}>
                <div className='pipe-top' style={{left: startPosition.x + i * 225, height: pipe.height}}>
                </div>
        
                <div className='pipe-bottom'  style={{left:  startPosition.x+ i * 225, height: pipe.height}}>
                </div>
            </div>
          )
        })
      }
    </>

  )
}

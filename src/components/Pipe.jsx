import React from 'react'
import { useSelector } from 'react-redux'

export default function Pipe(props) {

  const {startPosition, pipes} = useSelector((state) => state.pipe)


  return (
    <>
      {
        pipes.map((pipe, i) => {
          return (
            <div key={i} style={{position: 'relative'}}>
                <div ref={props.topPipe} className='pipe-top' style={{left: startPosition.x + i * 225, height: pipe.height}}>
                </div>
        
                <div ref={props.bottomPipe} className='pipe-bottom'  style={{left:  startPosition.x+ i * 225, height: pipe.height, top: pipe.height + 100}}>
                </div>
            </div>
          )
        })
      }
    </>

  )
}

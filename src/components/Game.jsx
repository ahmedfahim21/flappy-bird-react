import React, { useEffect, useRef } from 'react'
import Bird from './Bird'
import ForeGround from './ForeGround'
import Pipe from './Pipe'
import { useDispatch, useSelector } from 'react-redux'
import { start } from '../Redux/gameReducer'
import { fly, fall } from '../Redux/birdReducer'
import { generatePipe, pipeRun } from '../Redux/pipeReducer'



export default function Game() {
    
    const dispatch = useDispatch()
    const { game } = useSelector((state) => state.game)
    const bird = useRef()
    const topPipe = useRef()
    const bottomPipe = useRef()

    
    function areInContact(div1, div2, div3) {
        // Get the bounding rectangles for each div
        const rect1 = div1.getBoundingClientRect();
        const rect2 = div2.getBoundingClientRect();
        const rect3 = div3.getBoundingClientRect();
      
        // Check if div1 is in contact with div2 or div3
        return (rect1.left < rect2.right &&
                rect1.right > rect2.left &&
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top) ||
               (rect1.left < rect3.right &&
                rect1.right > rect3.left &&
                rect1.top < rect3.bottom &&
                rect1.bottom > rect3.top);
      }


    const handleClick = (e) => {

        if(game.isPlaying){
            dispatch(fly())
        }

        if(!game.isPlaying){
            dispatch(start())
            setInterval(() => {
              dispatch(fall())
              dispatch(pipeRun())
            }, 150)
            setInterval(() => {
                 dispatch(generatePipe()) 
            }, 3000)
        }
    }





  return (
    <div className='game-div' onClick={handleClick}>

        <Bird birdRef={bird}/>

        <Pipe topPipe={topPipe} bottomPipe={bottomPipe}/>
        <ForeGround />

    </div>
  )
}

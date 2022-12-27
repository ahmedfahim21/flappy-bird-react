import React, { useEffect, useRef } from 'react'
import Bird from './Bird'
import ForeGround from './ForeGround'
import Pipe from './Pipe'
import { useDispatch, useSelector } from 'react-redux'
import { gameOver, start } from '../Redux/gameReducer'
import { fly, fall, birdReset } from '../Redux/birdReducer'
import { generatePipe, pipeReset, pipeRun } from '../Redux/pipeReducer'

let gameLoop
let pipeGenerator


export default function Game() {
    
    const dispatch = useDispatch()
    const { game } = useSelector((state) => state.game)
    const bird = useRef()
    const topPipe = useRef()
    const bottomPipe = useRef()
    const ground = useRef()



    
    function isInContact(div1, div2, div3, div4) {
        // Get the bounding rectangles for each div element
        const rect1 = div1.getBoundingClientRect();
        const rect2 = div2.getBoundingClientRect();
        const rect3 = div3.getBoundingClientRect();
        const rect4 = div4.getBoundingClientRect();
      
        // Check if the rectangles intersect
        const isIntersecting = (rect1, rect2) =>
          rect1.left < rect2.right && rect1.right > rect2.left &&
          rect1.top < rect2.bottom && rect1.bottom > rect2.top;
      
        // Return true if div1 is in contact with any of the other div elements
        return isIntersecting(rect1, rect2) || isIntersecting(rect1, rect3) || isIntersecting(rect1, rect4);
    }

    function startGameLoop() {
        gameLoop = setInterval(() => {
            dispatch(fall())
            dispatch(pipeRun())
          }, 150)

        pipeGenerator = setInterval(() => {
            dispatch(generatePipe()) 

       }, 3000)
    }

    function stopGameLoop() {
        clearInterval(gameLoop)
        clearInterval(pipeGenerator)
    }



    const handleClick = (e) => {

        if(game.status === 'PLAYING'){
            dispatch(fly())
        }

        if(isInContact(bird.current, topPipe.current, bottomPipe.current, ground.current)){
            dispatch(gameOver())
            dispatch(pipeReset())
            dispatch(birdReset())
        }
    }

    const newGameHandler = () => {
        startGameLoop()
        dispatch(start())
    }

    useEffect(() => {
        if(game.status === 'GAME_OVER'){
            stopGameLoop()
        }

    },[game.status])

  return (
    <div className='game-div' onClick={handleClick}>

        {game.status === 'NEW_GAME' &&
            <img className='start-btn' src="src/assets/start-button.png" onClick={newGameHandler} alt="" />
        }
        {game.status === 'GAME_OVER' &&
            <img className='start-btn' src="src/assets/start-button.png" onClick={newGameHandler} alt="" />
        }
        { game.status === 'PLAYING' &&
            (<>
            <Bird birdRef={bird}/>
    
            <Pipe topPipe={topPipe} bottomPipe={bottomPipe}/>
            <ForeGround ground={ground}/>
            
            </>
            )
        }

    </div>
  )
}

import React, { useEffect } from 'react'
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


    const handleClick = (e) => {

        if(game.isPlaying){
            dispatch(fly())
            return
        }
        if(!game.isPlaying){
            dispatch(start())
            setInterval(() => {
              dispatch(fall())
              dispatch(pipeRun())
              dispatch(generatePipe())
            }, 150)
        }
    }





  return (
    <div className='game-div' onClick={handleClick}>
        <Bird />
        <Pipe />
        <ForeGround />
    </div>
  )
}

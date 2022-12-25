import React, { useEffect } from 'react'
import Bird from './Bird'
import ForeGround from './ForeGround'
import Pipe from './Pipe'
import { useDispatch, useSelector } from 'react-redux'
import { start } from '../Redux/gameReducer'
import { fly } from '../Redux/birdReducer'


export default function Game() {

    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const bird = useSelector((state) => state.bird)


    useEffect(() => {
        const handleKeyPress = (e) => {
            if(e.keyCode === 32){
                dispatch(fly())

            }
            if(!game.playing ){
                dispatch(start())
            }
        }

        document.addEventListener('keypress', handleKeyPress)
    },[])



  return (
    <div className='game-div'>
        <Bird />
        <Pipe />
        <ForeGround />
    </div>
  )
}

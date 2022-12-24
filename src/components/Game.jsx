import React from 'react'
import Bird from './Bird'
import ForeGround from './ForeGround'
import Pipe from './Pipe'

export default function Game() {
  return (
    <div className='game-div'>
        <Bird />
        <Pipe />
        <ForeGround />
    </div>
  )
}

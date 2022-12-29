import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    game: {
        status: 'NEW_GAME',
    },
    currentChallenge: {
        topPipe: null,
        bottomPipe: null
    }
}


export const gameSlice = createSlice({
    name: "game", 
    initialState, 
    reducers: {
        start: (state,action) => {
            state.game.status = 'PLAYING'
        },
        gameOver: (state,action) => {
            state.game.status = 'GAME_OVER'
        },
        newGame: (state,action) => {
            state.game.status = 'NEW_GAME'
        },
        updatePipe: (state,action) => {
            state.currentChallenge.topPipe = action.payload.top
            state.currentChallenge.bottomPipe = action.payload.bottom
        }
    }
})

export const {start,gameOver, newGame, updatePipe} = gameSlice.actions

export default gameSlice.reducer
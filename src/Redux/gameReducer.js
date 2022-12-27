import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    game: {
        status: 'NEW_GAME',

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
    }
})

export const {start,gameOver, newGame} = gameSlice.actions

export default gameSlice.reducer
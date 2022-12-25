import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    game: {
        isPlaying: false
    }
}


export const gameSlice = createSlice({
    name: "game", 
    initialState, 
    reducers: {
        start: (state,action) => {
            state.game.isPlaying = true

        },
        gameOver: (state,action) => {
            state.game.isPlaying = false
        },
    }
})

export const {start,gameOver} = gameSlice.actions

export default gameSlice.reducer
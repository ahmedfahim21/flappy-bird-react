import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    game: {
        playing: false
    }
}


export const gameSlice = createSlice({
    name: "game", 
    initialState, 
    reducers: {
        start: (state,action) =>{
            state.game.playing = true
        }
    }
})

export const {start} = gameSlice.actions

export default gameSlice.reducer
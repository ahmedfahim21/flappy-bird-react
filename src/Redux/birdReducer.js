import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    bird: {
        y: 250,
    }
}


export const birdSlice = createSlice({
    name: "bird", 
    initialState, 
    reducers: {
        fly: (state,action) => {
            state.bird.y -= 50
        }
    }
})

export const {fly} = birdSlice.actions

export default birdSlice.reducer
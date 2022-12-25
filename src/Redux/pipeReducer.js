import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    startPosition: {
        x: 310
    },
    pipes: [{
        height: 200
    }]

}


export const pipeSlice = createSlice({
    name: "pipe", 
    initialState, 
    reducers: {
        pipeRun: (state,action) => {
            state.startPosition.x -= 10
        },
        generatePipe: (state, action) => {
            state.pipes = [...state.pipes, {height: 200}]
        }
    }
})

export const {pipeRun, generatePipe} = pipeSlice.actions

export default pipeSlice.reducer
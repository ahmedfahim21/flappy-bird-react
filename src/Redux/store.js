 import { configureStore } from "@reduxjs/toolkit";
import birdReducer from "./birdReducer";
 import gameReducer from './gameReducer'


 export const store = configureStore({
    reducer: {
        game: gameReducer,
        bird: birdReducer
    }
 })
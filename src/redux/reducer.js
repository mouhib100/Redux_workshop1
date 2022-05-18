import { sendData } from "./action"

{/*import {PLUS,INCREMENT,DECREMENT} from "./actiontype"
const init = {
    count : 0,
    show : true ,
    users : [],
    movie : {},
    lastname : ""
}
//always we use state and action
const countReducer = (state=init,action) => {
    switch (action.type) {
        case PLUS:
            
            return {
                ...state,
                count : action.payload
            }

            case "INCREMENT":
            
            return {
                ...state,
                count : state.count+1
            }

            case DECREMENT:
            
            return {
                ...state,
                count : state.count-1
            }
    
        default: return state
            
    }



} 
export default countReducer */}

const init = {
    movies : [],
    movie : {},
    selectedMovie: [] // bech na3ml fonction nselectionner beha 
} 
//always we use state and action
const movieLists = (state=init,action) => {
    switch (action.type) {
        case "sendData":
            
            return {
                ...state,
                movies : action.payload //action.js.payload

            }
        case "getOneMovie":
            
            return {
                ...state,
                movie : action.payload //action.js.payload

            }
        
        default: return state
            
    }



} 
export default movieLists


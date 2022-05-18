{/*import {PLUS,DECREMENT} from "./actiontype"
export const plus = () => {

return {
    type : PLUS,
    payload : 1+1 //the data that i want to store, payload selon le besoin 
}


}

export const increment = () => {
return {
    type : "INCREMENT"

}


}
export const decrement = () => {

return {
    type : DECREMENT
}


}*/}

export const sendData = (result) => {
        return {
            type : "sendData",
            payload : result
        }
        
}
export const sendOneMovie = (result) => {
    return {
        type : "getOneMovie",
        payload : result
    }
    
}
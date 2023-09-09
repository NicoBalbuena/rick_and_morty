import { ADD_FAV,REMOVE_FAV,FILTER_CARDS,ORDER_CARDS } from "./actions-types";

export const addFav = (character) => {  /**Tipo de dato de las actions creators:funciones que retornan objetos */
    return{
        type: ADD_FAV,
        payload:character
    }
}

export const removeFav = (id) => {
    return{
        type:REMOVE_FAV,
        payload:id
    }
}

export const filterCards = (gender) => {
    return{
        type:FILTER_CARDS,
        payload:gender
    }
}

export const orderCards = (orden) => {
    return{
        type:ORDER_CARDS,
        payload:orden
    }
}
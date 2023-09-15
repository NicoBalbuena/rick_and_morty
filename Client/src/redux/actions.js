import { ADD_FAV,REMOVE_FAV,FILTER,ORDER} from "./actions-types";

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
        type:FILTER,
        payload:gender
    }
}

export const orderCards = (order) => {
    return{
        type:ORDER,
        payload:order
    }
}
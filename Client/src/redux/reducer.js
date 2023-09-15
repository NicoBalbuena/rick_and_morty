import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./actions-types";

const initialState= {
    myFavorites:[],
    allCharacters:[]
}
 

const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters, action.payload],/**aca hago una copia(para no pisar la info que ya está) y actualizo mi estado */
                allCharacters:[...state.allCharacters, action.payload]
            }
        case  REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter(fav=>fav.id !== action.payload) //filter:retorna un nuevo array
                                                                                //agarramo el estado myfavorite,lo filtramos y le decimos que nos vamos a quedar con todos los fav que su id sea distinto al id que me pasan por payload   
            }
        case FILTER:
            const allCharactersFiltro =state.allCharacters.filter(character =>
            character.gender === action.payload);
            return{
                ...state,
                myFavorites:
                    action.payload ==='allCharacters'
                    ? [...state.allCharacters]
                    :allCharactersFiltro
            }
        case ORDER:
            const allCharactersCopia=[...state.allCharacters]
            return{
                ...state,
                myFavorites:
                    action.payload==='A'
                    ?allCharactersCopia.sort((a,b)=>a.id-b.id)
                    :allCharactersCopia.sort((a,b)=>b.i-a.id)
            }
        default:
            return{...state}
    }   

}
export default reducer;
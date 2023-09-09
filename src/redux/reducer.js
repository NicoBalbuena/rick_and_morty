import { ADD_FAV,REMOVE_FAV } from "./actions-types";


const initialState= {
    myFavorites:[]
}


const reducer= (state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites, action.payload] /**aca hago una copia(para no pisar la info que ya está) y actualizo mi estado */
            }
        case  REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter(fav=>fav.id !== action.payload) //filter:retorna un nuevo array
                                                                                //agarramo el estado myfavorite,lo filtramos y le decimos que nos vamos a quedar con todos los fav que su id sea distinto al id que me pasan por payload   
            }
        default:
            return{...state}
    }   

}
export default reducer;
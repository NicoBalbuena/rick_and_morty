import { Link } from "react-router-dom";
import {addFav,removeFav} from '../redux/actions'
import {connect} from 'react-redux';
import { useState ,useEffect} from "react";

function Card({id,name,status,species,gender,image,onClose,removeFav,addFav,myFavorites}) {
   const [isFav, setIsFav]= useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id,name,status,species,gender,image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return (
      <div >
         <button onClick={handleFavorite}>{isFav? '❤️' :'🤍'}</button>
         
         {/*Ejercicio 2,renderizar las propiedades y agregar el metodo onClick-Clase 6*/}
         <button onClick={() => onClose(id)}>X</button>
        
         <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
         </Link>
         
         <h2>{status}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}
//Otra forma:
/*export default function Card(props) {   
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>

         <img src={props.image} alt='' /> 
      </div>
   );
}*/

const mapStateToProps = (state) =>{
   return{
      myFavorites:state.myFavorites
   }
}

const mapDispatchToProps=(dispatch) =>{
   return {
      addFav :(character)=>{dispatch(addFav(character))},
      removeFav: (id) =>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)
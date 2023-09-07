import { Link } from "react-router-dom";



export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         {/*Ejercicio 2,renderizar las propiedades y agregar el metodo onClick-Clase 6*/}
         <button onClick={() => onClose(id)}>X</button>
        
         <Link to={`/detail/${id}`}>
               <h2>{name}</h2>
         </Link>
         
         
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
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

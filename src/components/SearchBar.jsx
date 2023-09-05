import { useState } from "react";


export default function SearchBar({onSearch}) {
   const[id,setId]=useState('');

   const handleChange= (event)=>{
      setId(event.target.value)   
   }


   return (
      <div>{/*Lo que logro con poner onChange es decirle,quedate atento ante un cambio.Es decir ante un cambio se activa dicha funcion */}
         <input type='search' onChange={handleChange} value={id}/> {/**cuando value es igual al id, para que se actualice en tiempo real*/}
         <button onClick={() =>{onSearch(id);setId('')}}>Agregar</button> {/**Lo que hace el setId es que quede 
          * en blanco luego de que me traiga al personaje */}
      </div>
   );
}

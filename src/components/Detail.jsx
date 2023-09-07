import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";



const Detail = () => {
    
    const {id}=useParams()

    const [character, setCharacter]=useState({ });

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);//no olvidarme del id en el array de dependencia para evitar el loop infit

    return(
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <h2>img src={character?.image} alt={character?.name}</h2>
        </div>
    )
}

export default Detail;


/* <h2>{character && character.name}</h2>
/*character ? <h2>{character.name}</h2> : null*/


/*character && <div>
<h2>{character.name}</h2>
<h2>{character.status}</h2>
<h2>{character.species}</h2>
<h2>{character.gender}</h2>
<h2>{character.name.origin}</h2>
</div>*/

import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';


function App() {
      /*se hace destructuring con corchetes,porque el useState retorna un array.
      Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.*/
   const [characters,setCharacters]=useState([]);

   const onClose = (id) => {
      const charactersFiltro=characters.filter(character =>
      character.id !== Number(id))
      setCharacters(charactersFiltro);
   }
   
   const  onSearch= (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      /*.then(({ data }) => {*/
      .then(response => response.data)
      .then((data)=>{
         if (data.name) { 
            setCharacters((oldChars) => [...oldChars, data]);
         }
         else if(Number(data.name )> 826){
            window.alert('¡No hay personajes con este ID!');
         }else {
            window.alert('¡No hay personajes con este ID!');
         }
      }) ;
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
         
      </div>
    );
}

export default App;

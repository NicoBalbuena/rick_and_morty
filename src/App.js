import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import About from './components/About';
import Detail from './components/Detail';


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
         }else {
            window.alert('¡No hay personajes con este ID!');
         }
      }) ;
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         
         <Routes>
            <Route path='/home'  element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about'  element={<About></About>}></Route>
            <Route path='/detail/:id'  element={<Detail></Detail>}></Route>
            <Route path='/'  element={<Form></Form>}></Route>
         </Routes>
      </div>
    );
}

export default App;

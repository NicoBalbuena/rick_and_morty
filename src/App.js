import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes ,useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form';
import About from './components/About';
import Detail from './components/Detail';
const email='fer@gmail.com'
const password='nico3822'

function App() {
   const [access,setAccess]=useState(false)
   const navigate=useNavigate();
   const login=(userData)=>{
      if(email===userData.email && password===userData.password){
         setAccess(true);
         navigate('/home');
      }
   }

   const location=useLocation()
      /*se hace destructuring con corchetes,porque el useState retorna un array.
      Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.*/
   const [characters,setCharacters]=useState([]);

   const onClose = (id) => {
      const charactersFiltro=characters.filter(character =>
      character.id !== Number(id))
      setCharacters(charactersFiltro);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {/*location.name !== '/' && <Nav onSearch={onSearch} />*/}
         {location.pathname!== '/'
         ?<Nav onSearch={onSearch} /> 
         :null}
         
         
         <Routes>
            <Route path='/home'  element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about'  element={<About></About>}></Route>
            <Route path='/detail/:id'  element={<Detail></Detail>}></Route>
            <Route path='/'  element={<Form login={login}></Form>}></Route>
         </Routes>
      </div>
    );
}

export default App;

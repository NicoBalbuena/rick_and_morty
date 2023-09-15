import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes ,useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites';


const email='fer@gmail.com'
const password='nico3822'

function App() {
   const location=useLocation();
   const navigate=useNavigate();
   const [characters,setCharacters]=useState([]);
   const [access,setAccess]=useState(false);
   /*se hace destructuring con corchetes,porque el useState retorna un array.
   Crea un estado local llamado characters el cual se debe inicializar como un arreglo vacío.*/

   const login=(userData)=>{
      if(userData.email===email && userData.password===password){
         setAccess(true);
         navigate('/home');
      }
   }
   function logoutHandler() {
      setAccess(false);
    }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
      
   const  onSearch= (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

   const onClose = (id) => {
      const charactersFiltro=characters.filter(character =>
      character.id !== Number(id))
      setCharacters(charactersFiltro);
   }

   const randomGenerar = ()=>{
      let have=[];
      let random=(Math.random()*826).toFixed();
      random=Number(random);
      
      if(!have.includes(random)){
         have.push(random);
         axios(`https://rickandmortyapi.com/api/character/${random}`)
         /*.then(({ data }) => {*/
         .then(response => response.data)
         .then((data)=>{
         if (data.name) { 
            setCharacters((oldChars) => [...oldChars, data]);
         }else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      }else{
         console.log('Ya agregaste a todos');
         return false;
      }
   }

   return (
      <div className='App'>
         {/*location.pathname !== '/' && <Nav onSearch={onSearch} />*/}
         {location.pathname !== '/'
         ?<Nav onSearch={onSearch}  random={randomGenerar} logout={logoutHandler}/> 
         :null}

         

         <Routes>
            <Route path='/'  element={<Form login={login}></Form>}></Route>
            <Route path='/home'  element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about'  element={<About></About>}></Route>
            <Route path='/detail/:id'  element={<Detail></Detail>}></Route> 
            <Route path='/favorites' element={<Favorites></Favorites>}></Route>
         </Routes>
      </div>
   );
}

export default App;

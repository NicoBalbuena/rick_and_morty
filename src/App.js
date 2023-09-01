import './App.css';

import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

   const Characters = () => {
      let [characters,setCharacters]=useState([]);

   return (
      <div className='App'>
         <Nav/>
         <Cards characters={characters} />
         
      </div>
   );
}
}
export default App;

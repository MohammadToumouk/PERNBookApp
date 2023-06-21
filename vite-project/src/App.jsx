import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../Pages/home';
import Books from '../Pages/books';



import axios from 'axios'

function App() {
  

  return (

    <BrowserRouter>
        <Routes>
          
          <Route path="/" >
            
          
            <Route path="/" element={<Home />} />

            <Route path="Books" element={<Books  />} />
           
          </Route>
        </Routes>
      </BrowserRouter>

    



    
    
  );
}

export default App

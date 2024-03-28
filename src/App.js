import React from 'react';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

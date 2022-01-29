import React from 'react';
import ReactDOM from 'react-dom';
import {global} from './global/global';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Pokemon} from './pages/Pokemon';
import {NotFound} from './pages/404';
import {Login} from './pages/Login';
import {Feed} from './pages/Feed';
import {Perf} from './pages/Perfil';
import {Nav} from './components/Nav/Nav';


ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <br/>
    <br/>
    <br/>
    <br/>
      <Routes>
      <Route path="/login" element={<Login />} /> 
      <Route path="/perfil" element={<Perf />} />   
      <Route path="/" element={<Pokemon />} />   
      <Route path="/quotes" element={<Home quotesDB={global.quotesDB} />} />
      <Route path="/publi" element={<Feed />} />  
      <Route path="*" element={<NotFound />} />   
      </Routes>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);

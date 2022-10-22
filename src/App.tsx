import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MenuPrincial } from "./app/views/navbar/MenuPrincial"
import { ClientesPage } from './app/pages/ClientesPage';
import { Home } from './app/pages/Home';
import { FormClientePage } from './app/pages/FormClientePage';

function App(): JSX.Element {
  return (

    <BrowserRouter>
      <MenuPrincial />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/clientes"element={<ClientesPage />} />
        <Route path="/clientes/add" element={<FormClientePage />} />
        <Route path="/clientes/edit/:id" element={<FormClientePage />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

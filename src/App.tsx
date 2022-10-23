import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MenuPrincial } from "./app/views/navbar/MenuPrincial"
import { ClientesPage } from './app/pages/ClientesPage';
import { Home } from './app/pages/Home';
import { FormClientePage } from './app/pages/FormClientePage';
import { ListaProductos } from './app/pages/ListaProductos';
import { FormProducto } from './app/pages/FormProducto';
import { ListaVededores } from './app/pages/ListaVededores';
import { FormVendedor } from './app/pages/FormVendedor';

function App(): JSX.Element {
  return (

    <BrowserRouter>
      <MenuPrincial />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/clientes/add" element={<FormClientePage />} />
        <Route path="/clientes/edit/:id" element={<FormClientePage />} />
        
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/add" element={<FormProducto />} />
        <Route path="/productos/edit/:id" element={<FormProducto />} />

        <Route path="/vendedores" element={<ListaVededores />} />
        <Route path="/vendedores/add" element={<FormVendedor />} />
        <Route path="/vendedores/edit/:id" element={<FormVendedor />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

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
import LoginPage from './app/pages/LoginPage';
import { ListaProveedores } from './app/pages/ListaProveedores';
import { FormProveedor } from './app/pages/FormProveedor';

function App(): JSX.Element {
  return (

    <BrowserRouter>
      <MenuPrincial />
      <Routes>
        <Route path='/Login' element={<LoginPage />}/>

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

        <Route path="/proveedores" element={<ListaProveedores />} />
        <Route path="/proveedores/add" element={<FormProveedor />} />
        <Route path="/proveedores/edit/:id" element={<FormProveedor />} />

        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

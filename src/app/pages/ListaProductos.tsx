import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BtnEliminar } from "../components/BtnEliminar";
import { environment } from "../environments/environment";
import { ProductoModel } from "../models/ProductoModel";

const ListaProductos = (): JSX.Element => {
  const [buscando, setBuscando] = useState(true);
  const [productos, setProductos] = useState<ProductoModel[]>([]);

  useEffect(() => {
    axios
      .get(environment.baseUrl + "/productos")
      .then((resp) => {
        setProductos(resp.data);
        setBuscando(false);
      })
      .catch((error) => {
        console.error(error);
        setBuscando(false);
      });
  });

  return (
    <div className="container">
      <div>
        <br />
        {
        buscando
          ? "Cargando..."
          : productos.length === 0 && "No hay clientes disponibles"
        }
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio Venta</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item) => (
              <tr key={item.id.toString()}>
                <td >{item.id}</td>
                <td >{item.nombre}</td>
                <td >{item.descripcion}</td>
                <td >$ {item.precioventa}</td>

                <td>
                  <Link to={"/productos/edit/" + item.id}>
                    {" "}
                    <Button as="input" type="submit" value="Editar" />
                  </Link>
                </td>

                <td>
                  <BtnEliminar endpoint={"productos"} id={item.id.toString()} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link to={"/Productos/add"}>
          {" "}
          <Button as="input" type="submit" value="Crear Producto" />
        </Link>
      </div>
    </div>
  );
};

export { ListaProductos };

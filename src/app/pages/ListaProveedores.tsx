import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BtnEliminar } from "../components/BtnEliminar";
import { environment } from "../environments/environment";
import { ClienteModel } from "../models/ClienteModel";

const ListaProveedores = () => {
  const [proveedore, setProveedore] = useState<ClienteModel[]>([]);
  const [buscando, setBuscando] = useState(true);

  useEffect(() => {
    axios
      .get(environment.baseUrl + "/proveedores")
      .then((resp) => {
        setProveedore(resp.data);
        setBuscando(false);
      })
      .catch((error) => {
        console.error(error);
        setBuscando(false);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <br />
        {buscando
          ? "Cargando..."
          : proveedore.length === 0 && "No hay proveedore disponibles"}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendedor</th>
              <th>Celular</th>
              <th>Direccion</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
            proveedore.map((item) => (
              <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>
                  {item.primerNombre} {item.segundoNombre} {item.primerApellido}{" "}
                  {item.segundoApellido}
                </td>
                <td>{item.celular}</td>
                <td>{item.direccion}</td>
                <td>
                  <Link to={"/proveedores/edit/" + item.id}>
                    {" "}
                    <Button as="input" type="submit" value="Editar" />
                  </Link>
                </td>
                <td>
                  <BtnEliminar
                    endpoint={"proveedores"}
                    id={item.id.toString()}
                    />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link to={"/proveedores/add"}>
          {" "}
          <Button as="input" type="submit" value="Crear Vendedor" />
        </Link>
      </div>
    </div>
  );
};

export { ListaProveedores };

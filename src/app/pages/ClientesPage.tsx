import axios from "axios";
import { environment } from "../environments/environment";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClienteModel } from "../models/ClienteModel";
import { BtnEliminar } from "../components/BtnEliminar";

const ClientesPage = (): JSX.Element => {
 

  const [buscando, setBuscando] = useState(true);
  const [clientes, setClientes] = useState<ClienteModel[]>([]);

  useEffect(() => {
    axios
      .get(environment.baseUrl + "/clientes")
      .then((resp) => {
        setClientes(resp.data);
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
          : clientes.length === 0 && "No hay clientes disponibles"}

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Celular</th>
              <th>Direccion</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((item) => (
              <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>
                  {item.primerNombre} {item.segundoNombre} {item.primerApellido} {item.segundoApellido}
                </td>
                <td>{item.celular}</td>
                <td>{item.direccion}</td>

                <td>
                  <Link to={"/Clientes/edit/" + item.id}>
                    {" "}
                    <Button as="input" type="submit" value="Editar" />
                  </Link>
                </td>
                <td>
                  <BtnEliminar endpoint={"clientes"} id={item.id.toString()}  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link to={"/Clientes/add"}>
          {" "}
          <Button as="input" type="submit" value="Crear Cliente" />
        </Link>
      </div>
    </div>
  );
};

export { ClientesPage };

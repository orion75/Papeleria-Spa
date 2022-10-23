import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BtnEliminar } from "../components/BtnEliminar";
import { environment } from "../environments/environment";
import { ClienteModel } from "../models/ClienteModel";

const ListaVededores = () => {
  const [vendedores, setVendedores] = useState<ClienteModel[]>([]);
  const [buscando, setBuscando] = useState(true);

  useEffect(() => {
    axios
      .get(environment.baseUrl + "/vendedores")
      .then((resp) => {
        setVendedores(resp.data);
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
          : vendedores.length === 0 && "No hay vendedores disponibles"}
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
            vendedores.map((item) => (
              <tr key={item.id.toString()}>
                <td>{item.id}</td>
                <td>
                  {item.primerNombre} {item.segundoNombre} {item.primerApellido}{" "}
                  {item.segundoApellido}
                </td>
                <td>{item.celular}</td>
                <td>{item.direccion}</td>
                <td>
                  <Link to={"/vendedores/edit/" + item.id}>
                    {" "}
                    <Button as="input" type="submit" value="Editar" />
                  </Link>
                </td>
                <td>
                  <BtnEliminar
                    endpoint={"vendedores"}
                    id={item.id.toString()}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link to={"/vendedores/add"}>
          {" "}
          <Button as="input" type="submit" value="Crear Vendedor" />
        </Link>
      </div>
    </div>
  );
};

export { ListaVededores };

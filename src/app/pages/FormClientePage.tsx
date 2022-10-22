import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { environment } from "../environments/environment";
import { useForm } from "react-hook-form";
import { ClienteModel } from "../models/ClienteModel";
import { ErroModel } from "../models/ErroModel";

const FormClientePage = (): JSX.Element => {
  const { id } = useParams();
  const isAddMode = !id;
  const { register, handleSubmit, reset, setValue, getValues, formState } =
    useForm<ClienteModel>();

  const [errores, setErrores] = useState<ErroModel>();
  const navegar = useNavigate();

  const onSubmit = handleSubmit((data) => {
    return isAddMode ? createItem(data) : updateItem(id, data);
  });

  function createItem(data: ClienteModel) {
    axios
      .post(environment.baseUrl + "/clientes", data)
      .then((resp) => {
        navegar("/Clientes")
      })
      .catch((error) => {
        console.error(error);
        
      });
  }

  function updateItem(id: string, data: ClienteModel) {
    axios
      .put(environment.baseUrl + "/clientes/" + id, data)
      .then((resp) => {
        navegar("/Clientes")
      })
      .catch((error) => {
        console.error(error);
        
      });
  }



  useEffect(() => {
    if (!isAddMode) {
      axios
        .get(environment.baseUrl + "/clientes/" + id)
        .then((resp) => {
          reset(resp.data);
        })
        .catch((error) => {
          setErrores(error.response.data);
          console.log(error.response.data);
          alert(errores?.mensagge);
          navegar("/");
        });
    }
  }, [id, navegar]);

  // const editar = async (item: ClienteModel) => {
  //   const error = {} as ErroModel;
  //   setErrores(error);
  //   axios
  //     .put(environment.baseUrl + "/clientes" + id, item)
  //     .then((respuesta) => {
  //       navegar("/");
  //     })
  //     .catch((err: ErroModel) => {
  //       setErrores(err);
  //     });
  // };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>{isAddMode ? "Crear Cliente" : "Cambiar Cliente"}</h1>

        <div className="form-group row">
          <div className="form-group col">
            <label>Id</label>
            <div className="col-sm-1">
              <input
                type="text"
                {...register("id")}
                className={`form-control ${
                  formState.errors.id ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
        </div>

        <div className="form-group row">
          <label>Primer Nombre</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("primerNombre")}
              className={`form-control ${
                formState.errors.primerNombre ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Segundo Nombre</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("segundoNombre")}
              className={`form-control ${
                formState.errors.segundoNombre ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Primer Apellido</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("primerApellido")}
              className={`form-control ${
                formState.errors.primerApellido ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Segundo Apellido</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("segundoApellido")}
              className={`form-control ${
                formState.errors.segundoApellido ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Celular</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("celular")}
              className={`form-control ${
                formState.errors.celular ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Direccion</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("direccion")}
              className={`form-control ${
                formState.errors.direccion ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="btn btn-primary"
        >
          {formState.isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1" />
          )}
          Guardar
        </button>
        <Link to={isAddMode ? "../clientes" : ".."} className="btn btn-link">
          Cancelar
        </Link>
      </form>
    </div>
  );
};

export {FormClientePage}
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { environment } from "../environments/environment";
import { ClienteModel } from "../models/ClienteModel";

const FormProveedor = () => {
  const { id } = useParams();
  const IsAddMode = !id;
  const { register, handleSubmit, reset, formState } = useForm<ClienteModel>();
  const navegar = useNavigate();

  const onSubmit = handleSubmit((data) => {
    return IsAddMode ? createItem(data) : updateItem(id, data);
  });

  function createItem(data: ClienteModel) {
    axios
      .post(environment.baseUrl + "/proveedores", data)
      .then((response) => {
        navegar("/proveedores");
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.mensagge);
      });
  }

  function updateItem(id: string, data: ClienteModel) {
    axios
      .put(environment.baseUrl + "/proveedores/" + id, data)
      .then((resp) => {
        navegar("/proveedores");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (!IsAddMode) {
      axios
        .get(environment.baseUrl + "/proveedores/" + id)
        .then((resp) => {
          reset(resp.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          navegar("/");
        });
    }
  }, [IsAddMode, id, navegar, reset]);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>{IsAddMode ? "Crear Vendedor" : "Cambiar Vendedor"}</h1>


        <div className="form-group row" hidden>
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
              {...register("primerNombre", { required: true })}
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
              {...register("primerApellido", { required: true })}
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
              {...register("celular", { required: true })}
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
              {...register("direccion", { required: true })}
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
        <Link to={"../proveedores"} className="btn btn-link">
          Cancelar
        </Link>




      </form>
    </div>
  );
};

export { FormProveedor };

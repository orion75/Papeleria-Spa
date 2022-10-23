import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { environment } from "../environments/environment";
import { useForm } from "react-hook-form";
import { ProductoModel } from "../models/ProductoModel";
import { ErroModel } from "../models/ErroModel";

const FormProducto = (): JSX.Element => {
  const { id } = useParams();
  const isAddMode = !id;
  const { register, handleSubmit, reset, setValue, getValues, formState } =
    useForm<ProductoModel>();

  const [errores, setErrores] = useState<ErroModel>();
  const navegar = useNavigate();

  const onSubmit = handleSubmit((data) => {
    return isAddMode ? createItem(data) : updateItem(id, data);
  });

  function createItem(data: ProductoModel) {
    axios
      .post(environment.baseUrl + "/productos", data)
      .then((resp) => {
        navegar("/Productos");
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.mensagge);
      });
  }

  function updateItem(id: string, data: ProductoModel) {
    axios
      .put(environment.baseUrl + "/productos/" + id, data)
      .then((resp) => {
        navegar("/Productos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (!isAddMode) {
      axios
        .get(environment.baseUrl + "/productos/" + id)
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

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>{isAddMode ? "Crear Producto" : "Cambiar Producto"}</h1>

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
          <label>Nombre del Producto</label>
          <div className="col-sm-8">
            <input
              type="text"
              {...register("nombre", { required: true })}
              className={`form-control ${
                formState.errors.nombre ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Descripcion</label>
          <div className="col-sm-8">
            <input
              type="text"
              {
                ...register("descripcion", { required: true })}
                className={`form-control ${
                  formState.errors.descripcion
                  ? "is-invalid" : ""
              }`}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Precio de venta</label>
          <div className="col-sm-8">
            <input
              type="number"
              {...register("precioventa", { required: true })}
              className={`form-control ${
                formState.errors.precioventa ? "is-invalid" : ""
              }`}
              min="0.00"
              
            />
          </div>
        </div>

        <br/>
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
        <Link to={"../Productos"} className="btn btn-link">
          Cancelar
        </Link>
      </form>
    </div>
  );
};

export { FormProducto };

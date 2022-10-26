import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginModel } from "../models/LoginModel";
import axios from 'axios';
import { environment } from '../environments/environment';

export default function LoginPage(props: any) {
  const { register, handleSubmit, formState } = useForm<LoginModel>();

  const onSubmit = handleSubmit((data) => {
    axios
      .post(environment.baseUrl + "/auth/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.mensagge);
      });



    
  });

  return (
    <div className="container    m-5-auto">
      <h2>Iniciar sessión</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <div className="form-group col">
            <label>Usuario</label>
            <div className="col-sm-3">
              <input
                type="text"
                {...register("username", {required: true})}
                className={`form-control ${
                  formState.errors.username ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col">
            <label>Contraseña</label>
            <div className="col-sm-3">
              <input
                type="text"
                {...register("password", {required: true})}
                className={`form-control ${
                  formState.errors.password ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
        </div>

        <br />
        <p>
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="btn btn-primary"
          >
            {formState.isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1" />
            )}
            Validar
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Regresar a pagna Home</Link>.
        </p>
      </footer>
    </div>
  );
}

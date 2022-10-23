import axios from "axios"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { environment } from "../environments/environment"

function BtnEliminar(props: { endpoint: string; id: string }) {
    
    const navegar = useNavigate()
    const Eliminar = async () => {
        axios.delete( environment.baseUrl + "/" + props.endpoint +"/" + props.id )
            .then( resp => {
                navegar("../" + props.endpoint);
            }).catch( err => {
                console.error( err );
            });
    }

    const Alerta = () => {
        const titulo: string = "Desea eliminar de " + props.endpoint + " el item con id:" + props.id;
        return (window.confirm( titulo ) === true )? Eliminar() : () => {}
    }

    return (
        <Button variant="danger" size="sm" onClick={Alerta}>
        Eliminar
        </Button>
    )
}

export { BtnEliminar }
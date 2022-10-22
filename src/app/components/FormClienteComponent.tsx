import React from 'react';
import { ClienteModel } from '../models/ClienteModel';
import { useForm } from 'react-hook-form';

function FormClienteComponent() {

    // const { id } = match.params;
    // const isAddMode = !id;

    const {register, handleSubmit, reset, formState: { errors }} = useForm<ClienteModel>( )
    
    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
    })



    
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='id'>Id</label>
                <input type="text"
                {...register("id")} name ="id" />
            </div>
            <div>
                <label>Primer Nombre</label>
                <input type='text' {...register("primerNombre")} name="primerNombre" />
            </div>
            <div>
                <label>Segundo Nombre</label>
                <input type="text" {...register("segundoNombre")} name="segundoNombre" />
            </div>
            <div>
                <label htmlFor='primerApellido'>Primer Apellido</label>
                <input type='text'
                {...register("primerApellido")} />
            </div>
            <div>
                <label htmlFor='segundoApellido'>Segundo Apellido</label>
                <input type='text'
                {...register("segundoApellido")} />
            </div>
            <div>
                <label htmlFor='celular'>Celular</label>
                <input id='celular' name='celular' type='text' />
            </div>
            <div>
                <label htmlFor='direccion'>Direccion</label>
                <input id='direccion' name='direccion' type='text' />
            </div>
            <button type='submit'>Guardar</button>
        </form>
    );
}

export {FormClienteComponent}
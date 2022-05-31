import React from 'react'
import Form from '../components/Form'

const Registrar = () => {

    return (
        <div className="banner">
            <Form
                id={""}
                method={"POST"}
                p_nombreCompleto={""}
                p_cantidad={0}
                p_origen={""}
                p_destino={""}
                p_clase={""}
                p_fechaIda={""}
                p_fechaVuelta={""}
            />
        </div>
    )
}

export default Registrar
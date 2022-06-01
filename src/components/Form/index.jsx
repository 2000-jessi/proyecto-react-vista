import React from 'react'
import Swal from 'sweetalert2'

const Form = ({

    method,
    id,
    p_nombreCompleto,
    p_cantidad,
    p_origen,
    p_destino,
    p_clase,
    p_fechaIda,
    p_fechaVuelta,
    setEditing
}) => {
    const [nombreCompleto, setNombreCompleto] = React.useState(p_nombreCompleto)
    const [cantidad, setCantidad] = React.useState(p_cantidad)
    const [origen, setOrigen] = React.useState(p_origen)
    const [destino, setDestino] = React.useState(p_destino)
    const [clase, setClase] = React.useState(p_clase)
    const [fechaIda, setFechaIda] = React.useState(p_fechaIda)
    const [fechaVuelta, setFechaVuelta] = React.useState(p_fechaVuelta)

    const Api = "https://api-react-firebase.herokuapp.com/api/reservations"

    const registrarViaje = async () => {
        if (nombreCompleto.trim() !== "" && cantidad > 0 && origen !== "" && destino !== "" && clase !== "") {
            const obj = {
                nombre: nombreCompleto,
                cantidadPersonas: cantidad,
                origen: origen,
                destino: destino,
                clase: clase,
                fechaIda: fechaIda,
                fechaVuelta: fechaVuelta
            }
            await fetch(Api, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(obj)
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Excelente! se ha añadido tu reservación',
                showConfirmButton: false,
                timer: 1500
            })
            setNombreCompleto("")
            setCantidad(0)
            setOrigen("")
            setDestino("")
            setClase("")
            setFechaIda("")
            setFechaVuelta("")
        } else {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No has llenado todos los campos',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const editarViaje = async () => {
        if (nombreCompleto.trim() !== "" && cantidad > 0 && origen !== "" && destino !== "" && clase !== "") {
            const obj = {
                nombre: nombreCompleto,
                cantidadPersonas: cantidad,
                origen: origen,
                destino: destino,
                clase: clase,
                fechaIda: fechaIda,
                fechaVuelta: fechaVuelta
            }
            await fetch(`${Api}/${id}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(obj)
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Excelente! se han añadido tus cambios',
                showConfirmButton: false,
                timer: 1500
            })
            setNombreCompleto("")
            setCantidad(0)
            setOrigen("")
            setDestino("")
            setClase("")
            setFechaIda("")
            setFechaVuelta("")
            setEditing(false)
        } else {
            alert("Falta llenar campos")
        }
    }

    return (

        <div className="formularios">
            <div className="contenedor-formulario">
                <form action="">
                    <div className="form">
                        <p className="titulo">Reserva tu viaje</p>
                        <div className="etiquetas">
                            <p>DATOS</p>
                        </div>
                        <div className="grupo">
                            <input
                                type="text"
                                name="txtNombre"
                                value={nombreCompleto}
                                onChange={event => { setNombreCompleto(event.target.value) }}
                            />
                            <span className="barra"></span>
                            <label>Nombre Completo</label>
                        </div>
                        <div className="grupo">
                            <input
                                type="number"
                                name="txtCantidad"
                                value={cantidad}
                                onChange={event => { setCantidad(event.target.value) }}
                            /><span className="barra"></span>
                            <label>Cantidad de personas</label>
                        </div>
                        <div className="grupo">
                            <input
                                type="text"
                                name="txtOrigen"
                                value={origen}
                                onChange={event => { setOrigen(event.target.value) }}
                            />
                            <span className="barra"></span>
                            <label>Origen</label>
                        </div>
                        <div className="grupo">
                            <input
                                type="text"
                                name="txtDestino"
                                value={destino}
                                onChange={event => { setDestino(event.target.value) }}
                            /><span className="barra"></span>
                            <label>Destino</label>
                        </div>
                        <div className="grupo">
                            <input
                                type="text"
                                name="txtClase"
                                value={clase}
                                onChange={event => { setClase(event.target.value) }}
                            /><span className="barra"></span>
                            <label>Clase</label>
                        </div>
                        <div className="grupo">
                            <input
                                type="date"
                                name="txtDateIda"
                                value={fechaIda}
                                onChange={event => { setFechaIda(event.target.value) }}
                            /><span className="barra"></span>
                            <label>Fecha de Ida</label>
                        </div>
                        <div className="grupo">
                            <input
                                type="date"
                                name="txtDateVuelta"
                                value={fechaVuelta}
                                onChange={event => { setFechaVuelta(event.target.value) }}
                            /><span className="barra"></span>
                            <label>Fecha de Vuelta</label>
                        </div>
                        <div className="boton-guardar">
                            {
                                method != "PATCH" ?
                                    <button
                                        type='button'
                                        onClick={registrarViaje}
                                    >Guardar</button>
                                    :

                                    <button
                                        type='button'
                                        onClick={editarViaje}
                                    >Guardar Cambios</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
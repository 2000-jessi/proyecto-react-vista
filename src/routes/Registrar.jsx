import React from 'react'

const Registrar = () => {

    const [nombreCompleto, setNombreCompleto] = React.useState("")
    const [cantidad, setCantidad] = React.useState(0)
    const [origen, setOrigen] = React.useState("")
    const [destino, setDestino] = React.useState("")
    const [clase, setClase] = React.useState("")
    const [fechaIda, setFechaIda] = React.useState("")
    const [fechaVuelta, setFechaVuelta] = React.useState("")

    const Api = "https://api-react-firebase.herokuapp.com/api/reservations"

    const registrarViaje = async () => {
        if (nombreCompleto.trim() !== "" && cantidad > 0 && origen !== "" && destino !== "" && clase !== "") {
            const obj = {
                nombre: nombreCompleto,
                cantidadPersonas: cantidad,
                origen: origen,
                destino: destino,
                clase: clase,
                fechaIda: new Date(fechaIda),
                fechaVuelta: new Date(fechaVuelta)
            }
            await fetch(Api, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(obj)
            })

        } else {
            alert("Falta llenar campos")
        }
    }

    return (
        <div className="banner">
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
                                    typeName="text"
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
                                <button
                                    type='button'
                                    onClick={registrarViaje}
                                >Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registrar
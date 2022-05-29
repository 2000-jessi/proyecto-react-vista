import React from 'react'

const Registrar = () => {
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
                            <input type="text" name="txtNombre"/><span className="barra"></span>
                            <label>Nombre Completo</label>
                        </div>
                        <div className="grupo">
                            <input type="number" name="txtCantidad"/><span className="barra"></span>
                            <label>Cantidad de personas</label>
                        </div>
                        <div className="grupo">
                            <input type="text" name="txtOrigen"/><span className="barra"></span>
                            <label>Origen</label>
                        </div>
                        <div className="grupo">
                            <input typeName="text" name="txtDestino"/><span className="barra"></span>
                            <label>Destino</label>
                        </div>
                        <div className="grupo">
                            <input type="text" name="txtClase"/><span className="barra"></span>
                            <label>Clase</label>
                        </div>
                        <div className="grupo">
                            <input type="date" name="txtDateIda"/><span className="barra"></span>
                            <label>Fecha de Ida</label>
                        </div>
                        <div className="grupo">
                            <input type="date" name="txtDateVuelta"/><span className="barra"></span>
                            <label>Fecha de Vuelta</label>
                        </div>
                        <div className="boton-guardar">
                            <button type='button'>Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registrar
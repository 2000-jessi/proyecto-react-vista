import React from 'react'
import Form from '../components/Form'

const VerViaje = () => {


  const Api = "https://api-react-firebase.herokuapp.com/api/reservations"


  const [loading, setLoading] = React.useState(true)
  const [editing, setEditing] = React.useState(false)
  const [statesValues, setStatesValues] = React.useState({})
  const [dataAPI, setDataAPI] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(Api)
        const data = await response.json()
        setDataAPI([...data.body])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const editarRegistro = (data) => {
    setEditing(true)
    setStatesValues(data)
  }

  return (
    <div className="contenedor-verviaje">
      <h1><i className="fas fa-user-check"></i> USUARIOS</h1>
      <div className="contenedor-tabla">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"><i className="fas fa-user"></i> Nombre</th>
              <th scope="col"><i className="fas fa-users"></i> Cantidad Personas</th>
              <th scope="col"><i className="fas fa-plane-departure"></i> Origen</th>
              <th scope="col"><i className="fas fa-plane-arrival"></i> Destino</th>
              <th scope="col"><i className="fas fa-id-card"></i> Clase</th>
              <th scope="col"><i className="fas fa-calendar-alt"></i> Fecha Ida</th>
              <th scope="col"><i className="fas fa-calendar-alt"></i> Fecha Vuelta</th>
              <th scope="col"><i className="fas fa-edit"></i> Editar</th>
              <th scope="col"><i className="fas fa-trash-alt"></i> Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {

              !loading && dataAPI.map(data => {
                return (
                  <tr key={data.id}>
                    <td>{data.nombre}</td>
                    <td>{data.cantidadPersonas}</td>
                    <td>{data.origen}</td>
                    <td>{data.destino}</td>
                    <td>{data.clase}</td>
                    <td>{data.fechaIda}</td>
                    <td>{data.fechaVuelta}</td>
                    <td>
                      <button
                        type='button'
                        className="boton-editar"
                        onClick={() => { editarRegistro(data) }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                    <td>
                      <button type='button' className="boton-eliminar"><i className="fas fa-trash-alt"></i></button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div>
      {
        editing && <Form
          method={"POST"}
          p_nombreCompleto={statesValues.nombre}
          p_cantidad={statesValues.cantidadPersonas}
          p_origen={statesValues.origen}
          p_destino={statesValues.destino}
          p_clase={statesValues.clase}
          p_fechaIda={Date.parse(statesValues.fechaIda)}
          p_fechaVuelta={Date.parse(statesValues.fechaIda)} />
      }
    </div>
    </div>
    
     
  )
}

export default VerViaje
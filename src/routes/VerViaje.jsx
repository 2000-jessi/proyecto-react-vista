import React from 'react'

const VerViaje = () => {


  const Api = "https://api-react-firebase.herokuapp.com/api/reservations"
  let dataAPI = []

  React.useEffect(async () => {
    try {
      const response = await fetch(Api)
      const data = await response.json()
      dataAPI = data
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="contenedor-verviaje">
      <h1><i className="fas fa-user-check"></i> USUARIOS</h1>
      <div className="contenedor-tabla">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col"><i class="fas fa-user"></i> Nombre</th>
              <th scope="col"><i class="fas fa-users"></i> Cantidad Personas</th>
              <th scope="col"><i class="fas fa-plane-departure"></i> Origen</th>
              <th scope="col"><i class="fas fa-plane-arrival"></i> Destino</th>
              <th scope="col"><i class="fas fa-id-card"></i> Clase</th>
              <th scope="col"><i class="fas fa-calendar-alt"></i> Fecha Ida</th>
              <th scope="col"><i class="fas fa-calendar-alt"></i> Fecha Vuelta</th>
              <th scope="col"><i class="fas fa-edit"></i> Editar</th>
              <th scope="col"><i class="fas fa-trash-alt"></i> Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              dataAPI.map((index, data) => {
                return (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.cantidad}</td>
                    <td>{data.origen}</td>
                    <td>{data.destino}</td>
                    <td>Business</td>
                    <td>2021</td>
                    <td>2024</td>
                    <td>
                      <button type='button' className="boton-editar"><i class="fas fa-edit"></i></button>
                    </td>
                    <td>
                      <button type='button' className="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VerViaje
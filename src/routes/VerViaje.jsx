import React from 'react'

const VerViaje = () => {
  return (
    <div className="contenedor-verviaje">
      <h1><i class="fas fa-user-check"></i> USUARIOS</h1>
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
            <tr>
              <td>Jessica Lilian Becerra</td>
              <td>4</td>
              <td>Canada</td>
              <td>Ciudad de Mexico</td>
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
            <tr>
              <td>Jessica Lilian Becerra</td>
              <td>4</td>
              <td>Canada</td>
              <td>Ciudad de Mexico</td>
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
          </tbody>    
        </table>
      </div>
    </div>
  )
}

export default VerViaje
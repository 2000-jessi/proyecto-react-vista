import React from 'react'
import Form from '../components/Form'
import Swal from 'sweetalert2'
import Img from "../images/img.png"


const VerViaje = () => {


  const Api = "https://api-react-firebase.herokuapp.com/api/reservations"


  const [loading, setLoading] = React.useState(true)
  const [editing, setEditing] = React.useState(false)
  const [statesValues, setStatesValues] = React.useState({})
  const [dataAPI, setDataAPI] = React.useState([])
  const [stateDelete, setStateDelete] = React.useState(false)
  const [isEmpty, setIsEmpty] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(Api)
        const data = await response.json()
        if (data.body.length == 0) {
          setIsEmpty(true)
        } else {
          setIsEmpty(false)
        }
        setDataAPI([...data.body])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [editing, stateDelete, isEmpty])

  const editarRegistro = (data) => {
    if (statesValues != {}) {
      setStatesValues({})
      setEditing(false)
      console.log(statesValues)
    }
    setTimeout(() => {
      setEditing(true)
      setStatesValues(data)
      console.log(statesValues)
    }, 250)
  }

  const eliminarRegsitro = async (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esto no se podrá revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Estoy seguro',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminar()
      }
    })

    const eliminar = async () => {
      try {
        await fetch(`${Api}/${id}`, {
          method: "DELETE"
        })
        setStateDelete(!stateDelete)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Bien! has elimando el registro',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {

        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Ups! disculpa hubo un error :c',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
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
                      <button
                        type='button'
                        className="boton-eliminar"
                        onClick={() => { eliminarRegsitro(data.id) }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        {
          isEmpty && <div className='img-sin-registros'>
            <p>No hay registros aún</p>
            <img src={Img} />
          </div>
        }
      </div>
      <div>
        {
          editing && <Form
            method={"PATCH"}
            id={statesValues.id}
            p_nombreCompleto={statesValues.nombre}
            p_cantidad={statesValues.cantidadPersonas}
            p_origen={statesValues.origen}
            p_destino={statesValues.destino}
            p_clase={statesValues.clase}
            p_fechaIda={statesValues.fechaIda}
            p_fechaVuelta={statesValues.fechaVuelta}
            setEditing={setEditing} />
        }
      </div>
    </div>


  )
}

export default VerViaje
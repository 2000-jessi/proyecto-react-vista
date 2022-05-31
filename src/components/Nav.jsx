import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <section className="contenedor-nav">
        <div className="enlaces-header">
          <Link to="/"><i className="fas fa-globe-americas"></i> Registrar viaje </Link>
          <Link to="/verviaje"><i className="fas fa-plane-departure"></i> Ver mi viaje </Link>
        </div>
      </section>
    </nav>
  )
}

export default Nav
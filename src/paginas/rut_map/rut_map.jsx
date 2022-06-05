import React from 'react'
import Navbar from '../../componentes/navbar/navbar'
import Sidebar from '../../componentes/sidebar/sidebar'
import "./rut_map.scss"

const RutMap = () => {
  return (
    <div className='rutmap'>
      <Sidebar/>
      <div className="rutmapContainer">
        <Navbar/>
        rut_map
      </div>
      
    </div>
  )
}

export default RutMap
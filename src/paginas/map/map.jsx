import React from 'react'
import Navbar from '../../componentes/navbar/navbar'
import Sidebar from '../../componentes/sidebar/sidebar'
import "./map.scss"

const Map = () => {
  return (
    <div className='map'>
        <Sidebar/>
        <div className="mapContainer"> 
            <Navbar/>
            map           
        </div>        
    </div>
  )
}

export default Map
import React from 'react'
import Navbar from '../../componentes/navbar/navbar'
import Sidebar from '../../componentes/sidebar/sidebar'
import "./enabledlist.scss"

const Enabledlist = () => {
  return (
    <div className='enabledlist'>
        <Sidebar/>
        <div className="enabledlisContainer">            
            <Navbar/>
            enabledlist
        </div>
        
    </div>
  )
}

export default Enabledlist
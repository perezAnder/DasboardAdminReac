import React from 'react'
import Navbar from '../../componentes/navbar/navbar'
import Sidebar from '../../componentes/sidebar/sidebar'
import "./reports.scss"

const Reports = () => {
  return (
    <div className='reports'>
        <Sidebar/>
        <div className="reportsContainer">
            <Navbar/>
            reports
        </div>
        
    </div>
  )
}

export default Reports
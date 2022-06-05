import React from 'react'
import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MapIcon from '@mui/icons-material/Map';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SummarizeIcon from '@mui/icons-material/Summarize';
import RouteIcon from '@mui/icons-material/Route';
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration: "none"}}>
        <span className='logo'>LOGO</span>
        </Link>        
      </div>
      <hr />
      <div className='center'>
        <ul>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <HomeIcon className='icon'/>
            <span>Inicio</span>           
          </li>
          </Link>
          <Link to="/users" style={{textDecoration: "none"}}>
          <li>
            <PeopleAltIcon className='icon'/>
            <span>Usuarios</span>           
          </li>
          </Link>
          <Link to="/mapa" style={{textDecoration: "none"}}>
          <li>
            <MapIcon className='icon'/>
            <span>Mapa</span>           
          </li>
          </Link>
          <Link to="/listhabilitados" style={{textDecoration: "none"}}>
          <li>
            <FactCheckIcon className='icon'/>
            <span>Habilitar</span>           
          </li>
          </Link>
          <Link to="/reporte" style={{textDecoration: "none"}}>
          <li>
            <SummarizeIcon className='icon'/>
            <span>Reportes</span>           
          </li>
          </Link>
          <Link to="/ruta_mapa" style={{textDecoration: "none"}}>
          <li>
            <RouteIcon className='icon'/>
            <span>Ruta-Tiempo</span>           
          </li>
          </Link>
        </ul>
      </div>
      <div className='botton'>
        <p>Color del Tema</p>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}
export default Sidebar


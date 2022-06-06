import Navbar from "../../componentes/navbar/navbar"
import Sidebar from "../../componentes/sidebar/sidebar"
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import "./users.scss"
import Tablausers from "./tablauser/tablausers";
import { Link } from "react-router-dom"


const Users = () =>{
    return(
        <div className="users">
            <Sidebar/>
            <div className="usersContainer">
                <Navbar/>
                <div className="widgets">
                    <div className="crearUser">
                        <div className="left">
                            <spam className="title">Usuarios</spam>
                            <spam className="descrip">Desea Ingresar un nuevo Usuario</spam>
                            <Link to="/users/crearusuario" style={{textDecoration: "none"}}>
                            <button className="link">Crear Usuario</button>
                            </Link>
                        </div>
                        <div className="right">
                            <PersonAddAltRoundedIcon className='icon'/>
                                                        
                        </div>    
                    </div>                
                    <div className="tituloUser">
                        <spam className="title">USUARIOS</spam>                       
                        <spam className="descrip">Usuarios del sistema de gestion de tiqueo</spam>
                    </div>
                    <div className="busquedaUser">
                        <div className="left">
                            <spam className="title">Bucar Usuario</spam>                           
                            <div className='search'>          
                             <input type="item" placeholder='Buscar'/>
                             <SearchIcon className='icon'/>
                            </div>
                        </div>
                        <div className="right">
                            <PersonSearchRoundedIcon className='icon'/>                           
                        </div>
                    </div>
                </div> 
                <div className="tablaContainer">
                    <Tablausers/>
                </div>
                               
            </div>
           
        </div>
    )
}
export default Users
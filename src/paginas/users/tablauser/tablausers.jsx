import React from "react";
import "./tablausers.scss";
import getAllUsuarios from "./tablacontroler";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const Tablausers = () => {
  const [usuarios, setUsuarios] = React.useState([]);

  function actualizarUsuarios(){
    getAllUsuarios().then((usuarios) =>{
      setUsuarios(usuarios);
    });
  }

    React.useEffect(()=>{
      actualizarUsuarios();
    },[]);
  
    return (
    <div className='tablauser'>
      <table className='tabla'> 
        <thead>
          <tr>
            <th>N°</th>            
            <th>Nombre</th>
            <th>Correo</th>
            <th>Placa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>          
          {usuarios && usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.placa}</td>
              <td className="iconbtn">
                  <EditIcon className="iconu"/> 
                  <DeleteForeverIcon className="icond"/>                
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      
    </div>
  )
}

export default Tablausers
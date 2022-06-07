import React from 'react';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import Navbar from '../../../componentes/navbar/navbar';
import Sidebar from '../../../componentes/sidebar/sidebar';
import "./crearuser.scss";


import FirebaseApp from "../../../firebasecontrol/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const auth = getAuth(FirebaseApp);




const Crearuser = () => {

const firestore = getFirestore(FirebaseApp);

//nos creamos la funcion que captura datos y lo enviamos al metodo de firebase
async function regitrandoUsuario(email,password,nombre,placa,estado){
     //al crear el usuario firebase nos manda una promesa por medio de UserID o clave
    const infoUser = await createUserWithEmailAndPassword(auth,
        email, password).then((usuarioFirebase)=>{
        return usuarioFirebase;
    });
    console.log(infoUser);

    //hacemos referencia al documento, el camino de donde queremos que se guarde
    //capturamos de la promersa el uid y la ruta
    const docuRef = doc(firestore, `Usuarios/${infoUser.user.uid}`);
    //teniendo la referencia en el docuref, enviamos los datos y la referencia por setdoc
    setDoc(docuRef, {correo: email, estado: estado,nombre: nombre, placa: placa});



}

//nos creamos una funcion que captura los valores de los imputus
function submitFirebase (e){
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.pass.value;
    const nombre = e.target.elements.nombre.value;
    const placa = e.target.elements.placa.value;
    const estado = e.target.elements.estado.value;

    console.log("submit", email,password,nombre,placa,estado);

    //los datos que estamos capturando lo enviamos a la funcion de resgitar usuario
    regitrandoUsuario(email,password,nombre,placa,estado);

    //alerta de mensaje de regsitro
    alert("Usuario registrado con exito");

    //limpiamos el formulario
    e.target.reset();
    


}

  return (
    <div className='crearuser'>
        <Sidebar/>
        <div className="crearuserContainer">
            <Navbar/>
            <div className="containerform">
                <div className="top">
                <h1>Ingresar datos de Nuevo Usuario</h1>
                </div>
                <div className="botton">
                    <div className="left">
                        <img src="https://us.123rf.com/450wm/alexwhite/alexwhite1503/alexwhite150303616/37937871-c%C3%A1mara-icono-plana-azul.jpg?ver=6" alt="" />
                        <div className="cargaimg">
                            <label htmlFor="file">
                            Cargar Imagen: <PhotoCameraBackIcon/>
                            </label>
                            <input type="file"/>
                        </div>
                    </div>
                    <div className="right">
                        <form onSubmit={submitFirebase} id="formulario">
                            <div className="formInput">
                            <label>
                                Correo Electronico
                                <input type="email" id='email'/>
                            </label>
                            </div>
                            <div className="formInput">
                            <label>
                                Contraseña
                                <input type="password" id='pass' />
                            </label>
                            </div>
                            <div className="formInput">
                            <label>
                                Nombre Completo
                                <input type="text" id='nombre' />
                            </label>
                            </div>
                            <div className="formInput">
                            <label>
                                Placa vehiculo
                                <input type="text" id='placa' />
                            </label>
                            </div>
                            <div className="formInput">
                            <label>
                                Estado
                                <input type="text" id='estado' />
                            </label>
                            </div>                            
                            <input className='btn' type="submit" value="Registrar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crearuser
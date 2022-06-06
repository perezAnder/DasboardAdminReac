import React from 'react';
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
async function regitrandoUsuario(email,password,placa,estado){
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
    setDoc(docuRef, {correo: email, estado: estado, placa: placa});



}

//nos creamos una funcion que captura los valores de los imputus
function submitFirebase (e){
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.pass.value;
    const placa = e.target.elements.placa.value;
    const estado = e.target.elements.estado.value;

    console.log("submit", email,password,placa,estado);

    //los datos que estamos capturando lo enviamos a la funcion de resgitar usuario
    regitrandoUsuario(email,password,placa,estado);
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
                <form onSubmit={submitFirebase}>
                    <label>
                        correo electronico
                        <input type="email" id='email'/>
                    </label>
                    <label>
                        contraseña
                        <input type="password" id='pass' />
                    </label>
                    <label>
                        placa
                        <input type="text" id='placa' />
                    </label>
                    <label>
                        Estado
                        <input type="text" id='estado' />
                    </label>
                    <input type="submit" value="Registrar" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Crearuser
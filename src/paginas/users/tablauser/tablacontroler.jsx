import FirebaseApp from "../../../firebasecontrol/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(FirebaseApp);

export default async function getAllUsuarios(){
    const usuarios = [];
    //lo trascribimos a una coleccion, que nos devulve todo desordenado
    const conllectionusers = collection(db, "Usuarios");
    const snapshot = await getDocs(conllectionusers);
    snapshot.forEach((doc)=>{
        //eso que se recivio de la base de datos se lo hace un push
        usuarios.push(doc.data());
    });
    return usuarios;

}

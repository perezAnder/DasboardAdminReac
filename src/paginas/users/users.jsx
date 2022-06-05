import Navbar from "../../componentes/navbar/navbar"
import Sidebar from "../../componentes/sidebar/sidebar"
import "./users.scss"
import Widgetuser from "./widgetsuser/widgetuser"

const Users = () =>{
    return(
        <div className="users">
            <Sidebar/>
            <div className="usersContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgetuser/>
                    <Widgetuser/>
                    <Widgetuser/>
                </div>                
            </div>
           
        </div>
    )
}
export default Users
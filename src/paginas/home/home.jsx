import React from "react"
import Navbar from "../../componentes/navbar/navbar"
import Sidebar from "../../componentes/sidebar/sidebar"
import "./home.scss"

const Home = () =>{
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
               <Navbar/>
               home
            </div>
        </div>
    )
}
export default Home
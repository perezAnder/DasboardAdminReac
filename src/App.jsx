import "./App.scss"
import Home from "./paginas/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/login/login";
import SinglePage from "./paginas/singlepage/singlepage";
import Enabledlist from "./paginas/enabledlist/enabledlist"
import Map from "./paginas/map/map"
import Reports from "./paginas/reports/reports"
import RutMap from "./paginas/rut_map/rut_map"
import Users from "./paginas/users/users";
import Crearuser from "./paginas/users/crearuser/crearuser";
 

function App() {
  return (
  <div className="App">    
        <BrowserRouter>
           <Routes>
            <Route path="/">
              <Route index element = {<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="users">
                <Route index element={<Users/>}/>
                <Route path=":userId" element={<SinglePage/>}/>
                <Route path="crearusuario" element={<Crearuser/>}/>                
              </Route> 
              <Route path="listhabilitados" index element={<Enabledlist/>}/>              
              <Route path="mapa" index element={<Map/>}/>
              <Route path="reporte" index element={<Reports/>}/>
              <Route path="ruta_mapa" index element={<RutMap/>}/>
            </Route>           
          </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;

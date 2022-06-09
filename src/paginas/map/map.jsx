import Navbar from '../../componentes/navbar/navbar'
import Sidebar from '../../componentes/sidebar/sidebar'
import "./map.scss"
import { GoogleMap, LoadScriptNext } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import React from 'react'
import { Polyline } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: -17.372261, 
  lng: -66.202998 
};

const positions = [
 
  {lat: -17.367511,  lng: -66.213050},
  {lat: -17.369928,  lng: -66.207312},
  {lat: -17.374242,  lng: -66.198671},
  {lat: -17.375328, lng: -66.195195},
  {lat: -17.375630,  lng: -66.192825},
   {lat: -17.379275, lng: -66.188538}, 
 ];

const path = [
 
  {lat: -17.367511,  lng: -66.213050},
  {lat: -17.369928,  lng: -66.207312},
  {lat: -17.374242,  lng: -66.198671},
  {lat: -17.375328, lng: -66.195195},
  {lat: -17.375630,  lng: -66.192825},
  {lat: -17.379275, lng: -66.188538},


];

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [
   
  {lat: -17.367511,  lng: -66.213050},
  {lat: -17.369928,  lng: -66.207312},
  {lat: -17.374242,  lng: -66.198671},
  {lat: -17.375328, lng: -66.195195},
  {lat: -17.375630,  lng: -66.192825},
  {lat: -17.379275, lng: -66.188538}, 

  
  ],
  zIndex: 1
};



const Map = () => {
  return (
    <div className='map'>
        <Sidebar/>
        <div className="mapContainer"> 
            <Navbar/>
            <div className='contenedor'>  
            <LoadScriptNext 
              googleMapsApiKey="AIzaSyCV8ISK2O9krWHQss1JyDuGs88KSR6KQFM"
            >
              <GoogleMap
                id="marker-example"
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                
                <Marker position={positions[0]}></Marker>
                <Marker position={positions[1]}></Marker>
                <Marker position={positions[2]}></Marker>
                <Marker position={positions[3]}></Marker>
                <Marker position={positions[4]}></Marker>
                <Marker position={positions[5]}></Marker>
                
           
                
               

                  <Polyline                
                    path={path}
                    options={options}
                  />


              
                

                
              
             

            
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
            </LoadScriptNext >             
          
            </div>
        </div>        
    </div>
  )
}
export default React.memo(Map)
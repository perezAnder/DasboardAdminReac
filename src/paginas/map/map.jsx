import React from 'react'
import Navbar from '../../componentes/navbar/navbar'
import Sidebar from '../../componentes/sidebar/sidebar'
import "./map.scss"
import { useJsApiLoader, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import { Skeleton } from '@mui/material';




const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: -17.3970308,
  lng: -66.1662256
};


const Map = () => {

  const positions = [
    {lat: -17.382353,  lng: -66.186653},
    {lat: -17.367511,  lng: -66.213050},
    {lat: -17.369928,  lng: -66.207312},
    {lat: -17.374242,  lng: -66.198671},
    {lat: -17.375630,  lng: -66.192825},
    {lat: -17.378092,  lgn: -66.189592}];

  const path = [
      {lat: -17.382353,  lng: -66.186653},
      {lat: -17.367511,  lng: -66.213050},
      {lat: -17.369928,  lng: -66.207312},
      {lat: -17.374242,  lng: -66.198671},
      {lat: -17.375630,  lng: -66.192825},
      {lat: -17.378092,  lgn: -66.189592}];


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
          {lat: -17.382353,  lng: -66.186653},
          {lat: -17.367511,  lng: -66.213050},
          {lat: -17.369928,  lng: -66.207312},
          {lat: -17.374242,  lng: -66.198671},
          {lat: -17.375630,  lng: -66.192825},
          {lat: -17.378092,  lgn: -66.189592}
        ],
        zIndex: 1
      };

  //importar la api key
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if(!isLoaded){
    return <Skeleton/>
  }

   
  return (
    <div className='map'>
        <Sidebar/>
        <div className="mapContainer"> 
            <Navbar/>
            <div className='contenedor'>               
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={13}
                >  
                 {/*               
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
                  */} 

                </GoogleMap>
             
            </div>
        </div>        
    </div>
  )
}

export default Map
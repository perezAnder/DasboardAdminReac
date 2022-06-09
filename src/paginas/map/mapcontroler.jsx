import React, { createRef } from 'react'
import { useEffect, useRef } from 'React';

const Mapcontroler = () => {
    const ref = useRef();
    const style = { height: "100vh"};
    useEffect(()=>{
        new window.google.maps.Map(ref.current, {
            center: {lat: -17.382353,  lng: -66.186653},
            zoom: 13
    });

    })
  return <div ref={ref} style={style} id="map" />;
}

export default Mapcontroler
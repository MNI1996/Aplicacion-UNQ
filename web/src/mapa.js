import React from 'react';


function buscarMapa(){
        // Initialize the platform object:
        var platform = new H.service.Platform({
          'apikey': '{YOUR_APIKEY}'
          });
  
          // Obtain the default map types from the platform object
          var maptypes = platform.createDefaultLayers();
  
          // Instantiate (and display) a map object:
          var map = new H.Map(
          document.getElementById('mapContainer'),
          maptypes.vector.normal.map,
          {
            zoom: 10,
            center: { lng: 13.4, lat: 52.51 }
          });
          return map
}

function Mapa() {
  return (
  <div>
    <script>{ buscarMapa() }
    </script>
  </div>
  
  )
}

 
export default Mapa;  
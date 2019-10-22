import React from "react";
import { HereMap, Marker, PathFinder } from 'rc-here-maps';


const Mapa = () => {
  return (
    <div className="mapa" >
      <HereMap appId='Boze0cQ9ZbYPqj62AV4J' appCode='f8qaglUm2Rwtq84mZNtTvQ' useHTTPS>
        <PathFinder waypoints={[{ lat: 52.516, lng: 13.3779 }, { lat: 52.5206, lng: 13.3862 }]} />
      </HereMap>
    </div>
  );
};

export default Mapa;  
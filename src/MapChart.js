import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import "./styling/App.css"
import india from './topojsons/india.json';

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
    return (
      <><div className="parent">
      <ComposableMap className="map" data-tip="" projection="geoMercator" width={600} height={283} projectionConfig={{ scale: 420 }}>
          <ZoomableGroup zoom={1} center={[70,23]}>
            <Geographies geography={india}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography  
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { ST_NM } = geo.properties;
                      setStateName(`${ST_NM}`);
                      setTooltipContent(`${ST_NM}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick = {() => {
                      const { ST_NM } = geo.properties;
                      setStateName(`${ST_NM}`);
                      setShowDistrict(true);
                    }}
                    style={{
                      default: {
                        fill: "#2c3e50",
                        outline: "none"
                      },
                      hover: {
                        fill: "#b8bfc4",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <div className="name">
          <h1>INDIA</h1>
        </div>
        <div className="info">
          <h3>capital</h3>
          <h2>New Delhi</h2>
          <h3>total Population</h3>
          <h2>1,425,775,850 (2023 e)</h2>
          <h3>President</h3>
          <h2>Droupadi Murmu</h2>
          <h3>Prime minister</h3>
          <h2>Narendra Modi</h2>
          
        </div>
      </div>
    </>
    );
};

export default MapChart;
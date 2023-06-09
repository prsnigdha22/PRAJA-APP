//Andhra Pradesh
import React, { useState, useEffect } from 'react';
import districtsBackend from '../backend/DistrictsBackend';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { Link } from "react-router-dom";
import Anantapur from '../topojsons/AndhraPradesh/Anantapur.json';
import Chittor from '../topojsons/AndhraPradesh/Chittoor.json';
import EastGodavari from '../topojsons/AndhraPradesh/EastGodavari.json';
import Guntur from '../topojsons/AndhraPradesh/Guntur.json';
import YSRKadapa from '../topojsons/AndhraPradesh/YSRKadapa.json';
import Krishna from '../topojsons/AndhraPradesh/Krishna.json';
import Kurnool from '../topojsons/AndhraPradesh/Kurnool.json';
import Nellore from '../topojsons/AndhraPradesh/Nellore.json';
import Prakasam from '../topojsons/AndhraPradesh/Prakasam.json';
import Srikakulam from '../topojsons/AndhraPradesh/Srikakulam.json';
import Visakhapatnam from '../topojsons/AndhraPradesh/Visakhapatnam.json';
import Vizianagaram from '../topojsons/AndhraPradesh/Vizianagaram.json';
import WestGodavari from '../topojsons/AndhraPradesh/WestGodavari.json';
import '../styling/App1.css'

const AndhraPradesh = ({ selectedDistrict1 ,setShowDistrict}) => {
  let geoURL;
  let zoomMap = 1;
  let centerMap = [80, 22];
  let scaleMap = 400;

  if (selectedDistrict1 === 'Anantapur') {
    geoURL = Anantapur;
    scaleMap = 8000;
    centerMap = [79.45, 14.441888];
  } 
  if (selectedDistrict1 === 'Chittoor') {
    geoURL = Chittor;
    scaleMap = 9000;
    centerMap = [80.440677 , 13.447096];
  } 
  if (selectedDistrict1 === 'East Godavari') {
    geoURL = EastGodavari;
    scaleMap = 9000;
    centerMap = [83.337714,17.22125];
  } 
  if (selectedDistrict1 === 'Guntur') {
    geoURL = Guntur;
    scaleMap = 10000;
    centerMap = [81.445028,16.314209];
  } 
  if (selectedDistrict1 === 'YSR Kadapa') {
    geoURL = YSRKadapa;
    scaleMap = 10000;
    centerMap = [80.114932,14.557234];
  } 
  if (selectedDistrict1 === 'Krishna') {
    geoURL = Krishna;
    scaleMap = 10000;
    centerMap = [82.221442,16.559991];
  } 
  if (selectedDistrict1 === 'Kurnool') {
    geoURL = Kurnool;
    scaleMap = 9000;
    centerMap = [79.44602,15.55887];
  } 
  if (selectedDistrict1 === 'Nellore') {
    geoURL = Nellore;
    scaleMap = 10000;
    centerMap = [81.226458, 14.442599];
  } 
  if (selectedDistrict1 === 'Prakasam') {
    geoURL = Prakasam;
    scaleMap = 10000;
    centerMap = [80.88344,15.668463];
  } 
  if (selectedDistrict1 === 'Srikakulam') {
    geoURL = Srikakulam;
    scaleMap = 10000;
    centerMap = [85.666782,18.666974];
  } 
  if (selectedDistrict1 === 'Visakhapatnam') {
    geoURL = Visakhapatnam;
    scaleMap = 10000;
    centerMap = [83.9988,17.996815];
  } 
  if (selectedDistrict1 === 'Vizianagaram') {
    geoURL = Vizianagaram;
    scaleMap = 12000;
    centerMap = [84.665554, 18.555059];
  } 
  if (selectedDistrict1 === 'West Godavari') {
    geoURL = WestGodavari;
    scaleMap = 10000;
    centerMap = [82.77, 17];
  } 
  
  // districts
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    
    districtsBackend.getInfoByDistrictName(selectedDistrict1).then((response) => {
      console.log(response.data);
      setDistricts(response.data);
    });
  }, [selectedDistrict1]);
  console.log(districts);
 return (
  <> 
  
      <ComposableMap  className="state" data-tip="" projection="geoMercator" width={400} height={400} projectionConfig={{ scale: scaleMap }}>
        <ZoomableGroup zoom={zoomMap} center={centerMap}>
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#2c3e50",
                      outline: "none"
                    },
                    hover: {
                      fill: "#b8bfc4",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#2E8B57",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <h5 className="stname">{ selectedDistrict1}</h5>
      <div className="container">
      <div className="card">
                <div className="content">
                  <div className="front">
                  Headquarters
                  </div>
                  <div className="back">
                    {districts.d_headquarters}
                  </div>
                </div>
              </div>
              <div className="card">
          <div className="content">
              <div className="front">
                  Population
              </div>
              <div className="back">
                  {districts.d_population}
              </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="front">
            District Pin
            </div>
            <div className="back">
              
            {districts.pin}
            </div>
          </div>
        </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Area
                  </div>
                  <div className="back">
                    {districts.d_area}
                  </div>
                </div>
              </div>
              
              <Link className="card link" onClick={() => { setShowDistrict(true); }}>
                   {selectedDistrict1} Constituencies
              </Link>
            </div>
   
    </>
  );
};

export default AndhraPradesh;
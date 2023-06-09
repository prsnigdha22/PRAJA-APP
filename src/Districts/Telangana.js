import React, { useState, useEffect } from 'react';
import districtsBackend from '../backend/DistrictsBackend';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import Adilabad from '../topojsons/Telangana/Adilabad.json';
import BhadradriKothagudem from '../topojsons/Telangana/BhadradriKothagudem.json';
import Hyderabad  from '../topojsons/Telangana/Hyderabad.json';
import Jagitial from '../topojsons/Telangana/Jagitial.json';
import Jangoan from '../topojsons/Telangana/Jangoan.json';
import JayaShankar from '../topojsons/Telangana/JayaShankar.json';
import JogulambaGadhwal from '../topojsons/Telangana/JogulambaGadhwal.json';
import Karimnagar from '../topojsons/Telangana/Karimnagar.json';
import Khammam from '../topojsons/Telangana/Khammam.json';
import KumaramBheemAsifabad from '../topojsons/Telangana/KumaramBheemAsifabad.json';
import Mahabubnagar from '../topojsons/Telangana/Mahabubnagar.json';
import Mahbubabad from '../topojsons/Telangana/Mahbubabad.json';
import Mancherial from '../topojsons/Telangana/Mancherial.json';
import Medak from '../topojsons/Telangana/Medak.json';
import MedchalMalkajgiri from '../topojsons/Telangana/MedchalMalkajgiri.json';
import Mulugu from '../topojsons/Telangana/Mulugu.json';
import NagarKurnool from '../topojsons/Telangana/Nagarkurnool.json';
import Nalgonda from '../topojsons/Telangana/Nalgonda.json';
import Naryanpet from '../topojsons/Telangana/Naryanpet.json';
import Nirmal from '../topojsons/Telangana/Nirmal.json';
import Nizamabad from '../topojsons/Telangana/Nizamabad.json';
import Peddapalli from '../topojsons/Telangana/Peddapalli.json';
import RajannaSircilla from '../topojsons/Telangana/Rajannasircilla.json';
import Rangareddy from '../topojsons/Telangana/RangaReddy.json';
import Sangareddy from '../topojsons/Telangana/Sangareddy.json';
import Siddipet from '../topojsons/Telangana/Siddipet.json';
import Suryapet from '../topojsons/Telangana/Suryapet.json';
import Vikarabad from '../topojsons/Telangana/Vikarabad.json';
import Wanaparthy from '../topojsons/Telangana/Wanaparthy.json';
import WarangalRural from '../topojsons/Telangana/WarangalRural.json';
import WarangalUrban from '../topojsons/Telangana/WarangalUrban.json';
import YadadriBhuvanagiri from '../topojsons/Telangana/YadadriBhuvanagiri.json';
import Kamareddy from '../topojsons/Telangana/kamareddy.json';
import { Link } from "react-router-dom";
import '../styling/App1.css'
const Telangana = ({ selectedDistrict,setShowDistrict }) => {
    let geoURL;
    let zoomMap = 1;
    let centerMap = [80, 22];
    let scaleMap = 400;
  
      if (selectedDistrict === 'Adilabad') {
      geoURL = Adilabad;
      scaleMap = 15000;
      centerMap = [79.5599, 19.55];
      } 
      if (selectedDistrict === 'Bhadradri Kothagudem') {
      geoURL = BhadradriKothagudem;
      scaleMap = 15000;
      centerMap = [81.6633, 17.7556];
      } 
      if (selectedDistrict === 'Hyderabad') {
      geoURL = Hyderabad ;
      scaleMap = 50000;
      centerMap = [78.771684,17.387140];
      } 
      if (selectedDistrict === 'Jagitial') {
        geoURL = Jagitial;
        scaleMap = 17000;
        centerMap = [79.7718506,18.7908937];
      } 
      if (selectedDistrict === 'Jangoan') {
        geoURL = Jangoan;
        scaleMap = 20000;
        centerMap = [79.9949098,17.7059998];
      } 
      if (selectedDistrict === 'Jayashankar') {
        geoURL = JayaShankar;
        scaleMap = 20000;
        centerMap = [80.62976,18.55678];
      } 
      if (selectedDistrict === 'Jogulamba Gadwal') {
        geoURL = JogulambaGadhwal;
        scaleMap = 23000;
        centerMap = [78.4481363,16.1136589];
      } 
      if (selectedDistrict === 'Karimnagar') {
        geoURL = Karimnagar;
        scaleMap = 18000;
        centerMap = [79.998841, 18.438555];
      } 
      if (selectedDistrict === 'Khammam') {
        geoURL = Khammam ;
        scaleMap = 12000;
        centerMap = [81.551445,17.247253];
      } 
      if (selectedDistrict === 'Kumuram Bheem Asifabad') {
        geoURL = KumaramBheemAsifabad;
        scaleMap = 15000;
        centerMap =[80.2202,19.3330];
      } 
      if (selectedDistrict === 'Mahabubnagar') {
        geoURL = Mahabubnagar;
        scaleMap = 15000;
        centerMap = [78.998125, 16.667509];
      } 
      if (selectedDistrict === 'Mahabubabad') {
        geoURL = Mahbubabad;
        scaleMap = 18000;
        centerMap = [80.77731, 17.777528];
      } 
      if (selectedDistrict === 'Mancherial') {
        geoURL = Mancherial;
        scaleMap = 18000;
        centerMap = [80.119138, 19.005595];
      } 
      if (selectedDistrict === 'Medak') {
        geoURL = Medak;
        scaleMap = 20000;
        centerMap = [78.8800, 17.8999];
      } 
      if (selectedDistrict === 'Medchal Malkajgiri') {
        geoURL = MedchalMalkajgiri;
        scaleMap = 23000;
        centerMap = [79.2234, 17.5552];
      } 
      if (selectedDistrict === 'Mulugu') {
        geoURL = Mulugu;
        scaleMap = 18000;
        centerMap = [81,18.3333];
      } 
      if (selectedDistrict === 'Nagarkurnool') {
      geoURL = NagarKurnool;
      scaleMap = 12000;
      centerMap = [79.770249, 16.443942];
      } 
      if (selectedDistrict === 'Nalgonda') {
      geoURL = Nalgonda;
      scaleMap = 13000;
      centerMap = [80.3320294, 16.88];
      } 
      if (selectedDistrict === 'Narayanpet') {
        geoURL = Naryanpet;
        scaleMap = 18000;
        centerMap = [78.446008, 16.744511];
      } 
      if (selectedDistrict === 'Nirmal') {
        geoURL = Nirmal;
        scaleMap = 15000;
        centerMap = [79.222975 , 19.096412];
      } 
      if (selectedDistrict === 'Nizamabad') {
        geoURL = Nizamabad;
        scaleMap = 18000;
        centerMap = [78.994087,18.712505];
      } 
      if (selectedDistrict === 'Peddapalli') {
        geoURL = Peddapalli;
        scaleMap = 18000;
        centerMap = [80.27316,  18.616183];
      } 
      if (selectedDistrict === 'Rajanna Sircilla') {
        geoURL = RajannaSircilla;
        scaleMap = 20000;
        centerMap = [79.441450, 18.389220];
      } 
      if (selectedDistrict === 'Ranga Reddy') {
        geoURL = Rangareddy;
        scaleMap = 12000;
        centerMap = [79.666728, 17.119138];
      } 
      if (selectedDistrict === 'Sangareddy') {
        geoURL = Sangareddy;
        scaleMap = 16000;
        centerMap = [78.77, 17.885516];
      } 
      if (selectedDistrict === 'Siddipet') {
        geoURL = Siddipet;
        scaleMap = 18000;
        centerMap = [79.662074, 18.001904];
      } 
      if (selectedDistrict === 'Suryapet') {
        geoURL = Suryapet;
        scaleMap = 15000;
        centerMap = [80.6633674, 17.1353148];
      } 
      if (selectedDistrict === 'Vikarabad') {
        geoURL = Vikarabad ;
        scaleMap = 18000;
        centerMap = [78.554846,17.336430];
      } 
      if (selectedDistrict === 'Wanaparthy') {
      geoURL = Wanaparthy ;
      scaleMap = 18000;
      centerMap = [78.882182,16.362312];
      } 
      if (selectedDistrict === 'Warangal Rural') {
        geoURL = WarangalRural;
        scaleMap = 20000;
        centerMap = [80.448165, 18.000055];
      } 
      if (selectedDistrict === 'Warangal Urban') {
        geoURL = WarangalUrban;
        scaleMap = 30000;
        centerMap = [79.954054, 18.058901];
      } 
      if (selectedDistrict === 'Yadadri Bhuvanagiri') {
        geoURL = YadadriBhuvanagiri;
        scaleMap = 15000;
        centerMap = [79.88261, 17.44369];
      } 

      if (selectedDistrict === 'Kamareddy') {
      geoURL = Kamareddy;
      scaleMap = 18000;
      centerMap = [78.77, 18.3167];
      }
      
      // districts
      const [districts, setDistricts] = useState([]);

      useEffect(() => {
        
        districtsBackend.getInfoByDistrictName(selectedDistrict).then((response) => {
          console.log(response.data);
          setDistricts(response.data);
        });
      }, [selectedDistrict]);
      console.log(districts);

      return (
        <>
       
          <ComposableMap className="state" data-tip="" projection="geoMercator" width={400} height={400} projectionConfig={{ scale: scaleMap }}>
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

          <h5 className="stname">{ selectedDistrict}</h5>
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
                  {selectedDistrict} Constituencies
              </Link>
                  
            </div>
      
   
    </>
  );
};

export default Telangana;
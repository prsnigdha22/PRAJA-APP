import React from 'react';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import "./styling/App1.css"
import andamannicobar from './topojsons/states/andamannicobar.json';
import andhrapradesh from './topojsons/states/andhrapradesh.json';
import arunachalpradesh from './topojsons/states/arunachalpradesh.json';
import assam from './topojsons/states/assam.json';
import bihar from './topojsons/states/bihar.json';
import chhattisgarh from './topojsons/states/chhattisgarh.json';
import delhi from './topojsons/states/delhi.json';
import goa from './topojsons/states/goa.json';
import gujarat from './topojsons/states/gujarat.json';
import haryana from './topojsons/states/haryana.json';
import himachalpradesh from './topojsons/states/himachalpradesh.json';
import jammukashmir from './topojsons/states/jammukashmir.json';
import jharkhand from './topojsons/states/jharkhand.json';
import karnataka from './topojsons/states/karnataka.json';
import kerala from './topojsons/states/kerala.json';
import lakshadweep from './topojsons/states/lakshadweep.json';
import madhyapradesh from './topojsons/states/madhyapradesh.json';
import maharashtra from './topojsons/states/maharashtra.json';
import manipur from './topojsons/states/manipur.json';
import meghalaya from './topojsons/states/meghalaya.json';
import mizoram from './topojsons/states/mizoram.json';
import nagaland from './topojsons/states/nagaland.json';
import odisha from './topojsons/states/odisha.json';
import punjab from './topojsons/states/punjab.json';
import rajasthan from './topojsons/states/rajasthan.json';
import sikkim from './topojsons/states/sikkim.json';
import tamilnadu from './topojsons/states/tamilnadu.json';
import telangana from './topojsons/states/telangana.json';
import tripura from './topojsons/states/tripura.json';
import uttarakhand from './topojsons/states/uttarakhand.json';
import uttarpradesh from './topojsons/states/uttarpradesh.json';
import westbengal from './topojsons/states/westbengal.json';

const StateChart = ({ setTooltipContent, setDistrictName, selectedState,setShowDistrict }) => {
    let geoURL;
    let zoomMap = 1;
    let centerMap = [80, 22];
    let scaleMap = 400;
    if (selectedState === 'Andaman & Nicobar Island') {
        geoURL = andamannicobar;
        scaleMap = 1000;
        centerMap = [97,11];
    } else if (selectedState === 'Andhra Pradesh') {
        geoURL = andhrapradesh;
        scaleMap = 800;
        centerMap = [86,16.5];
    } else if (selectedState === 'Arunachal Pradesh') {
        geoURL = arunachalpradesh;
        scaleMap = 1200;
        centerMap = [98,28];
    } else if (selectedState === 'Assam') {
        geoURL = assam;
        scaleMap = 1300;
        centerMap = [96.25,26];
    } else if (selectedState === 'Bihar') {
        geoURL = bihar;
        scaleMap = 1300;
        centerMap = [89.5,26];
    } else if (selectedState === 'Chhattisgarh') {
        geoURL = chhattisgarh;
        scaleMap = 900;
        centerMap = [87,22];
    } else if (selectedState === 'NCT of Delhi') {
        geoURL = delhi;
        scaleMap = 11000;
        centerMap = [77.5,28.7];
    } else if (selectedState === 'Goa') {
        geoURL = goa;
        scaleMap = 6000;
        centerMap = [75,15.4];
    } else if (selectedState === 'Gujarat') {
        geoURL = gujarat;
        scaleMap = 1000;
        centerMap = [76.5,22.8];
    } else if (selectedState === 'Haryana') {
        geoURL = haryana;
        scaleMap = 1700;
        centerMap = [79,29.4];
    } else if (selectedState === 'Himachal Pradesh') {
        geoURL = himachalpradesh;
        scaleMap = 1800;
        centerMap = [80,32.2];
    } else if (selectedState === 'Jammu & Kashmir') {
        geoURL = jammukashmir;
        scaleMap = 1000;
        centerMap = [81,35.5];
    } else if (selectedState === 'Jharkhand') {
        geoURL = jharkhand;
        scaleMap = 1700;
        centerMap = [88.5,23.6];
    } else if (selectedState === 'Karnataka') {
        geoURL = karnataka;
        scaleMap = 850;
        centerMap = [82.5,15.8];
    } else if (selectedState === 'Kerala') {
        geoURL = kerala;
        scaleMap = 1200;
        centerMap = [81,11];
    } else if (selectedState === 'Lakshadweep') {
        geoURL = lakshadweep;
        scaleMap = 2300;
        centerMap = [75,11.3];
    } else if (selectedState === 'Madhya Pradesh') {
        geoURL = madhyapradesh;
        scaleMap = 900;
        centerMap = [83.5,24.4];
    } else if (selectedState === 'Maharashtra') {
        geoURL = maharashtra;
        scaleMap = 900;
        centerMap = [82,19.5];
    } else if (selectedState === 'Manipur') {
        geoURL = manipur;
        scaleMap = 3000;
        centerMap = [95.5,24.85];
    } else if (selectedState === 'Meghalaya') {
        geoURL = meghalaya;
        scaleMap = 2500;
        centerMap = [93,25.7];
    } else if (selectedState === 'Mizoram') {
        geoURL = mizoram;
        scaleMap = 2200;
        centerMap = [95.41,23.5];
    } else if (selectedState === 'Nagaland') {
        geoURL = nagaland;
        scaleMap = 3500;
        centerMap = [95.57,26.1];
    } else if (selectedState === 'Odisha') {
        geoURL = odisha;
        scaleMap = 1200;
        centerMap = [88,20.5];
    } else if (selectedState === 'Punjab') {
        geoURL = punjab;
        scaleMap = 1800;
        centerMap = [78.2,31.3];
    } else if (selectedState === 'Rajasthan') {
        geoURL = rajasthan;
        scaleMap = 760;
        centerMap = [80,27.5];
    } else if (selectedState === 'Sikkim') {
        geoURL = sikkim;
        scaleMap = 5000;
        centerMap = [89.5,27.68];
    } else if (selectedState === 'Tamil Nadu') {
        geoURL = tamilnadu;
        scaleMap = 1000;
        centerMap = [83,11.2];
    } else if (selectedState === 'Telangana') {
        geoURL = telangana;
        scaleMap = 1300;
        centerMap = [83,18];
    } else if (selectedState === 'Tripura') {
        geoURL = tripura;
        scaleMap = 4000;
        centerMap = [93.1,23.81];
    } else if (selectedState === 'Uttarakhand') {
        geoURL = uttarakhand;
        scaleMap = 2000;
        centerMap = [81.7,30.4];
    } else if (selectedState === 'Uttar Pradesh') {
        geoURL = uttarpradesh;
        scaleMap = 900;
        centerMap = [86.2,27.4];
    } else if (selectedState === 'West Bengal') {
        geoURL = westbengal;
        scaleMap = 950;
        centerMap = [93,24.78];
    }
 return (
        <>
        <ComposableMap className="state" data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: scaleMap }}>
          <ZoomableGroup zoom={zoomMap} center={centerMap}>
            <Geographies geography={geoURL}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography  
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { district } = geo.properties;
                      setDistrictName(`${district}`);
                      setTooltipContent(`${district}`);
                    }}
                    onMouseLeave={() => {
                    setTooltipContent("");
                    }}
                    onClick = {() => {
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
       
    </>
   );
};

export default StateChart;

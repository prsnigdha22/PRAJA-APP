//Maharastra
import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { Link } from "react-router-dom";
import Pune from '../topojsons/Maharashtra/Pune.json';
import Nashik from '../topojsons/Maharashtra/Nashik.json';
import Nandurbar from '../topojsons/Maharashtra/Nandurbar.json';
import Ahmadnagar from '../topojsons/Maharashtra/Ahmadnagar.json';
import Akola from '../topojsons/Maharashtra/Akola.json';
import Amaravati from '../topojsons/Maharashtra/Amaravati.json';
import Aurangabad from '../topojsons/Maharashtra/Aurangabad.json';
import Bhandara from '../topojsons/Maharashtra/Bhandara.json';
import Beed from '../topojsons/Maharashtra/Beed.json';
import Buldhana from '../topojsons/Maharashtra/Buldhana.json';
import Chandrapur from '../topojsons/Maharashtra/Chandrapur.json';
import Dhule from '../topojsons/Maharashtra/Dhule.json';
import Gadchiroli from '../topojsons/Maharashtra/Gadchiroli.json';
import Gondia from '../topojsons/Maharashtra/Gondia.json';
import Hingoli from '../topojsons/Maharashtra/Hingoli.json';
import Jalna from '../topojsons/Maharashtra/Jalna.json';
import Jalgaon from '../topojsons/Maharashtra/Jalgaon.json';
import Kolhapur from '../topojsons/Maharashtra/Kolhapur.json';
import Latur from '../topojsons/Maharashtra/Latur.json';
import Mumbai from '../topojsons/Maharashtra/Mumbai.json';
import MumbaiSuburban from '../topojsons/Maharashtra/MumbaiSuburban.json';
import Nagpur from '../topojsons/Maharashtra/Nagpur.json';
import Nanded from '../topojsons/Maharashtra/Nanded.json';
import Usmanabad from '../topojsons/Maharashtra/Usmanabad.json';
import Parbhani from '../topojsons/Maharashtra/Parbhani.json';
import Raigad from '../topojsons/Maharashtra/Raigad.json';
import Ratnagiri from '../topojsons/Maharashtra/Ratnagiri.json';
import Sangli from '../topojsons/Maharashtra/Sangli.json';
import Satara from '../topojsons/Maharashtra/Satara.json';
import Sindhudurg from '../topojsons/Maharashtra/Sindhudurg.json';
import Solapur from '../topojsons/Maharashtra/Solapur.json';
import Thane from '../topojsons/Maharashtra/Thane.json';
import Wardha from '../topojsons/Maharashtra/Wardha.json';
import Washim from '../topojsons/Maharashtra/Washim.json';
import Yavatmal from '../topojsons/Maharashtra/Yavatmal.json';
import '../styling/App1.css'
import districtsBackend from '../backend/DistrictsBackend';

const Maharashtra = ({ selectedDistrict, setShowDistrict }) => {
  let geoURL;
  let zoomMap = 1;
  let centerMap = [80, 22];
  let scaleMap = 400;

  if (selectedDistrict === 'Pune') {
    geoURL = Pune;
    scaleMap = 8000;
    centerMap = [76, 18.5236];
  }
  if (selectedDistrict === 'Nashik') {
    geoURL = Nashik;
    scaleMap = 9000;
    centerMap = [75.8, 20.22];
  }
  if (selectedDistrict === 'Nandurbar') {
    geoURL = Nandurbar;
    scaleMap = 12000;
    centerMap = [75.443996, 21.558178];
  }
  if (selectedDistrict === 'Dhule') {
    geoURL = Dhule;
    scaleMap = 12000;
    centerMap = [75.77, 21.11];
  }
  if (selectedDistrict === 'Jalgaon') {
    geoURL = Jalgaon;
    scaleMap = 13000;
    centerMap = [76.55, 21];
  }
  if (selectedDistrict === 'Ahmadnagar') {
    geoURL = Ahmadnagar;
    scaleMap = 9000;
    centerMap = [76, 19.221053];
  }
  if (selectedDistrict === 'Satara') {
    geoURL = Satara;
    scaleMap = 12000;
    centerMap = [75.330938, 17.691401];
  }
  if (selectedDistrict === 'Sangli') {
    geoURL = Sangli;
    scaleMap = 10000;
    centerMap = [75.880389, 16.997634];
  }
  if (selectedDistrict === 'Kolhapur') {
    geoURL = Kolhapur;
    scaleMap = 12000;
    centerMap = [75.33, 16.58];
  }
  if (selectedDistrict === 'Solapur') {
    geoURL = Solapur;
    scaleMap = 10000;
    centerMap = [76.806387, 17.889920];
  }

  if (selectedDistrict === 'Thane') {
    geoURL = Thane;
    scaleMap = 12000;
    centerMap = [74.338088, 19.668330];
  }
  if (selectedDistrict === 'Raigad') {
    geoURL = Raigad;
    scaleMap = 12000;
    centerMap = [74.550196, 18.551839];
  }
  if (selectedDistrict === 'Mumbai Suburban') {
    geoURL = MumbaiSuburban;
    scaleMap = 30000;
    centerMap = [73.335179, 19.113823];
  }
  if (selectedDistrict === 'Mumbai') {
    geoURL = Mumbai;
    scaleMap = 50000;
    centerMap = [73.117426, 18.95];
  }
  if (selectedDistrict === 'Ratnagiri') {
    geoURL = Ratnagiri;
    scaleMap = 10000;
    centerMap = [74.880003, 17.44222];
  } if (selectedDistrict === 'Sindhudurg') {
    geoURL = Sindhudurg;
    scaleMap = 12000;
    centerMap = [74.9000, 16.1700];
  } if (selectedDistrict === 'Aurangabad') {
    geoURL = Aurangabad;
    scaleMap = 12000;
    centerMap = [76.35247, 20.11];
  } if (selectedDistrict === 'Jalna') {
    geoURL = Jalna;
    scaleMap = 12000;
    centerMap = [77.22, 19.996811];
  } if (selectedDistrict === 'Beed') {
    geoURL = Beed;
    scaleMap = 10000;
    centerMap = [77.11, 18.983333];
  } if (selectedDistrict === 'Latur') {
    geoURL = Latur;
    scaleMap = 13000;
    centerMap = [77.88, 18.407957];
  } if (selectedDistrict === 'Usmanabad') {
    geoURL = Usmanabad;
    scaleMap = 12000;
    centerMap = [77.111941, 18.186066];
  } if (selectedDistrict === 'Nanded') {
    geoURL = Nanded;
    scaleMap = 10000;
    centerMap = [78.999717, 19.169815];
  } if (selectedDistrict === 'Parbhani') {
    geoURL = Parbhani;
    scaleMap = 12000;
    centerMap = [77.8866649, 19.3309958];
  } if (selectedDistrict === 'Hingoli') {
    geoURL = Hingoli;
    scaleMap = 15000;
    centerMap = [78.10249, 19.578143];
  } if (selectedDistrict === 'Buldhana') {
    geoURL = Buldhana;
    scaleMap = 10000;
    centerMap = [77.880870, 20.666846];
  } if (selectedDistrict === 'Washim') {
    geoURL = Washim;
    scaleMap = 12000;
    centerMap = [78.330002, 20.220000];
  } if (selectedDistrict === 'Akola') {
    geoURL = Akola;
    scaleMap = 13000;
    centerMap = [78.222960, 20.777228];
  } if (selectedDistrict === 'Amaravati') {
    geoURL = Amaravati;
    scaleMap = 10000;
    centerMap = [78.889551, 21.225524];
  } if (selectedDistrict === 'Yavatmal') {
    geoURL = Yavatmal;
    scaleMap = 10000;
    centerMap = [79.550407, 20.158794];
  } if (selectedDistrict === 'Wardha') {
    geoURL = Wardha;
    scaleMap = 12000;
    centerMap = [79.6678, 20.8893];
  } if (selectedDistrict === 'Nagpur') {
    geoURL = Nagpur;
    scaleMap = 13000;
    centerMap = [80.006660, 21.226633];
  } if (selectedDistrict === 'Chandrapur') {
    geoURL = Chandrapur;
    scaleMap = 12000;
    centerMap = [80.553360, 20.110324];
  } if (selectedDistrict === 'Bhandara') {
    geoURL = Bhandara;
    scaleMap = 14000;
    centerMap = [80.880002, 21.170000];
  } if (selectedDistrict === 'Gondia') {
    geoURL = Gondia;
    scaleMap = 13000;
    centerMap = [81.335000, 21.119801];
  } if (selectedDistrict === 'Gadchiroli') {
    geoURL = Gadchiroli;
    scaleMap = 8000;
    centerMap = [82.224797, 19.8888];
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
      <h5 className="stname">{selectedDistrict}</h5>
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

export default Maharashtra;
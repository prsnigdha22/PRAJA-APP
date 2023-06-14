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
import Bagalkote from '../topojsons/Karnataka/Bagalkote.json';
import Belgaum from '../topojsons/Karnataka/Belgaum.json';
import Bellary from '../topojsons/Karnataka/Bellary.json';
import BengaluruRural from '../topojsons/Karnataka/BengaluruRural.json'
import Bengaluru from '../topojsons/Karnataka/Bengaluru.json';
import Bidar from '../topojsons/Karnataka/Bidar.json';
import Bijapura from '../topojsons/Karnataka/Bijapura.json';
import Chamrajnagara from '../topojsons/Karnataka/Chamrajnagara.json';
import Chikballapura from '../topojsons/Karnataka/Chikballapura.json';
import Chikmagalur from '../topojsons/Karnataka/Chikmagalur.json';
import Chitradurga from '../topojsons/Karnataka/Chitradurga.json';
import DakshinaKannada from '../topojsons/Karnataka/DakshinaKannada.json';
import Davanagere from '../topojsons/Karnataka/Davanagere.json';
import Dharwad from '../topojsons/Karnataka/Dharwad.json';
import Gadag from '../topojsons/Karnataka/Gadag.json';
import Gulbarga from '../topojsons/Karnataka/Gulbarga.json';
import Hassan from '../topojsons/Karnataka/Hassan.json';
import Haveri from '../topojsons/Karnataka/Hassan.json';
import Kodagu from '../topojsons/Karnataka/Kodagu.json';
import Kolar from '../topojsons/Karnataka/Kolar.json';
import Koppala from '../topojsons/Karnataka/koppala.json';
import Mandya from '../topojsons/Karnataka/Mandya.json';
import Mysore from '../topojsons/Karnataka/Mysore.json';
import Raichur from '../topojsons/Karnataka/Raichur.json';
import Ramnagara from '../topojsons/Karnataka/Ramnagara.json';
import Shimoga from '../topojsons/Karnataka/Shimoga.json';
import Tumkur from '../topojsons/Karnataka/Tumkur.json';
import Udupi from '../topojsons/Karnataka/Udupi.json';
import UttarKannda from '../topojsons/Karnataka/UttarKannda.json';
import Yadgir from '../topojsons/Karnataka/Yadgir.json';
import '../styling/App1.css'

const Karnataka = ({ selectedDistrict1, setShowDistrict }) => {
    let geoURL;
    let zoomMap = 1;
    let centerMap = [80, 22];
    let scaleMap = 400;

    if (selectedDistrict1 === 'Bagalkote') {
        geoURL = Bagalkote;
        scaleMap = 8000;
        centerMap = [77.5, 16.181700];
    }
    if (selectedDistrict1 === 'Belgaum') {
        geoURL = Belgaum;
        scaleMap = 9000;
        centerMap = [76.5, 16.5];
    }
    if (selectedDistrict1 === 'Bellary') {
        geoURL = Bellary;
        scaleMap = 9000;
        centerMap = [78, 15.139393];
    }
    if (selectedDistrict1 === 'Bengaluru') {
        geoURL = Bengaluru;
        scaleMap = 10000;
        centerMap = [79, 12.972442];
    }
    if (selectedDistrict1 === 'BengaluruRural') {
        geoURL = BengaluruRural;
        scaleMap = 10000;
        centerMap = [79, 13.3232];
    }
    if (selectedDistrict1 === 'Bidar') {
        geoURL = Bidar;
        scaleMap = 10000;
        centerMap = [79, 17.920];
    }
    if (selectedDistrict1 === 'Bijapura') {
        geoURL = Bijapura;
        scaleMap = 9000;
        centerMap = [77.7, 16.827545];
    }
    if (selectedDistrict1 === 'Chamrajnagara') {
        geoURL = Chamrajnagara;
        scaleMap = 10000;
        centerMap = [78, 11.926147];
    }
    if (selectedDistrict1 === 'Chikballapura') {
        geoURL = Chikballapura;
        scaleMap = 10000;
        centerMap = [79, 13.435455];
    }
    if (selectedDistrict1 === 'Chikmagalur') {
        geoURL = Chikmagalur;
        scaleMap = 10000;
        centerMap = [77, 13.4045];
    }
    if (selectedDistrict1 === 'Chitradurga') {
        geoURL = Chitradurga;
        scaleMap = 10000;
        centerMap = [78, 14.6];
    }
    if (selectedDistrict1 === 'DakshinaKannada') {
        geoURL = DakshinaKannada;
        scaleMap = 12000;
        centerMap = [76, 12.86925];
    }
    if (selectedDistrict1 === 'Davanagere') {
        geoURL = Davanagere;
        scaleMap = 10000;
        centerMap = [
            77.5, 14.47];
    }
    if (selectedDistrict1 === 'Dharwad') {
        geoURL = Dharwad;
        scaleMap = 10000;
        centerMap = [76.5, 15.5];
    }
    if (selectedDistrict1 === 'Gadag') {
        geoURL = Gadag;
        scaleMap = 10000;
        centerMap = [77.5, 15.4026];
    }
    if (selectedDistrict1 === 'Gulbarga') {
        geoURL = Gulbarga;
        scaleMap = 10000;
        centerMap = [78, 17.320486];
    }
    if (selectedDistrict1 === 'Hassan') {
        geoURL = Hassan;
        scaleMap = 8000;
        centerMap = [77.9, 13.009711];
    }
    if (selectedDistrict1 === 'Haveri') {
        geoURL = Haveri;
        scaleMap = 8000;
        centerMap = [78, 12.8];
    }
    if (selectedDistrict1 === 'Kodagu') {
        geoURL = Kodagu;
        scaleMap = 10000;
        centerMap = [77, 12.3374];
    }
    if (selectedDistrict1 === 'Kolar') {
        geoURL = Kolar;
        scaleMap = 10000;
        centerMap = [80, 13.5];
    }
    if (selectedDistrict1 === 'Koppala') {
        geoURL = Koppala;
        scaleMap = 10000;
        centerMap = [77.6, 15.5];
    }
    if (selectedDistrict1 === 'Mandya') {
        geoURL = Mandya;
        scaleMap = 10000;
        centerMap = [78, 12.5237];
    }
    if (selectedDistrict1 === 'Mysore') {
        geoURL = Mysore;
        scaleMap = 10000;
        centerMap = [78, 12.311827];
    }
    if (selectedDistrict1 === 'Raichur') {
        geoURL = Raichur;
        scaleMap = 10000;
        centerMap = [78.5, 16.200829];
    }
    if (selectedDistrict1 === 'Ramnagara') {
        geoURL = Ramnagara;
        scaleMap = 10000;
        centerMap = [78.5, 12.715035];
    }
    if (selectedDistrict1 === 'Shimoga') {
        geoURL = Shimoga;
        scaleMap = 10000;
        centerMap = [76.5, 14.3];
    }
    if (selectedDistrict1 === 'Tumkur') {
        geoURL = Tumkur;
        scaleMap = 10000;
        centerMap = [78.4, 13.8];
    }
    if (selectedDistrict1 === 'Udupi') {
        geoURL = Udupi;
        scaleMap = 10000;
        centerMap = [74.742142, 13.340881];
    }
    if (selectedDistrict1 === 'UttarKannda') {
        geoURL = UttarKannda;
        scaleMap = 10000;
        centerMap = [76.2, 14.8];
    }
    if (selectedDistrict1 === 'Yadgir') {
        geoURL = Yadgir;
        scaleMap = 10000;
        centerMap = [78.5, 16.758604];
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
            <h5 className="stname">{selectedDistrict1}</h5>
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

export default Karnataka;
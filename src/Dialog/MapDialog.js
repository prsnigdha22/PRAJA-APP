import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ReactTooltip from 'react-tooltip';
import StateChart from '../StateChart';
import MapDialog1 from './MapDialog1';
import '../styling/App1.css'
import BackIcon from '@material-ui/icons/FirstPage';
import statesBackend from '../backend/StatesBackend';
const MapDialog = (props) => {
  const [contentD, setContentD] = useState([]);
  const [DTName, setDTName] = useState([]);
  const [show, setShow] = useState(false);
  const [states, setStates] = useState([]);
  const handleClose = () => setShow(false);
  const selectedState=props.StateName ;
  useEffect(() => {
      statesBackend.getStateInfoByName(selectedState).then((response) => {
           console.log(response.data); // Log the API response data
          setStates(response.data);
      });
  }, [selectedState]);
     console.log(states); 
  return ( 
    <>
    <div className="statep">
    <Dialog fullScreen  open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
      <MapDialog1 show={show} DistrictName={DTName}  closeModal={handleClose} />
      <StateChart setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} setShowDistrict={setShow} />
      <ReactTooltip>{contentD}</ReactTooltip>
      <h5 className="stname"> {props.StateName}</h5>
        <BackIcon id='close'  onClick={props.closeModal} />
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="front">
                Capital
            </div>
            <div className="back">
            {states.capital}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
              <div className="front">
                  Population
              </div>
              <div className="back">
                  {states.population}
              </div>
          </div>
        </div>
        <div className="card">
                <div className="content">
                  <div className="front">
                    Assembly Constituencies
                  </div>
                  <div className="back">
                    {states.assembly_constituencies}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Chief Minister
                  </div>
                  <div className="back">
                    {states.chiefMinister}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Area
                  </div>
                  <div className="back">
                    {states.area}
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="content">
                  <div className="front" >
                    Parliamentary Constituencies
                  </div>
                  <div className="back">
                    {states.parliamentary_constituencies}
                  </div>
                </div>
              </div>
            </div>
    </Dialog>
    </div>   
        </>
  )
};

export default MapDialog;
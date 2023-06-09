import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Maharashtra from '../Districts/Maharashtra';
import MapDialog2 from './MapDialog2';
import AndhraPradesh from '../Districts/AndhraPradesh';
import telangana from '../topojsons/states/telangana.json';
import maharashtra from '../topojsons/states/maharashtra.json';
import andhrapradesh from '../topojsons/states/andhrapradesh.json';
import Telangana from '../Districts/Telangana';
import '../styling/App1.css'
import BackIcon from '@material-ui/icons/FirstPage';

const MapDialog1 = (props) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

<BackIcon id='close'  onClick={props.closeModal} />


if (maharashtra.objects.maharashtra_district.geometries.map(s => s.properties.district).includes(props.DistrictName) ){
    
    return (
        <div className="statep">
        <Dialog fullScreen open={props.show} onClose={props.closeModal}  style={{ backgroundColor: 'black !important' }}>
            <MapDialog2 show={show} DistrictName={props.DistrictName} closeModal={handleClose} />
                <BackIcon id='close'  onClick={props.closeModal} />

                <Maharashtra selectedDistrict={props.DistrictName} setShowDistrict={setShow} />
        </Dialog>
        </div>
    );
}
if (andhrapradesh.objects.andhra_pradesh.geometries.map(s => s.properties.district).includes(props.DistrictName) ){
    
    return (
        <div className="statep">
        <Dialog fullScreen open={props.show} onClose={props.closeModal}  style={{ backgroundColor: 'black !important' }}>
            <MapDialog2 show={show} DistrictName={props.DistrictName} closeModal={handleClose} />
            <BackIcon id='close'  onClick={props.closeModal} />
                <AndhraPradesh selectedDistrict1={props.DistrictName} setShowDistrict={setShow} />
        </Dialog>
        </div>
    );
}
    if (telangana.objects.telangana.geometries.map(s => s.properties.district).includes(props.DistrictName) ){
    
        return (
            <div className="statep">
            <Dialog fullScreen open={props.show} onClose={props.closeModal}  style={{ backgroundColor: 'black !important' }}>
                <MapDialog2 show={show} DistrictName={props.DistrictName} closeModal={handleClose} />
                <BackIcon id='close'  onClick={props.closeModal} />
                    <Telangana selectedDistrict={props.DistrictName} setShowDistrict={setShow} />
            </Dialog>
            </div>
        );

}
}

export default MapDialog1;
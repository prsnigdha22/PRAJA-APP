import React, { useState, useEffect } from 'react';
import districtsBackend from '../backend/DistrictsBackend';
import '../styling/App1.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';;
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const KarnatakaAssembly = ({ selectedDistrict}) => {
  
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        color: 'white'
      },
      title: {
        display: true,
        text: 'Bar Chart',
        color: 'white',
      },
      datalabels: {
          display: true,
          color: 'white'
       }
    },
  scales: {
    x: {
      stacked: true,
      ticks: { color: '#bdc3c7'}
    },
    y: {
      stacked: true,
      ticks: { color: '#bdc3c7'}
    },
  },
};
      //parliament
      const [parliament, setParliaments] = useState([]);
      useEffect(() => {
        districtsBackend.getParliamentInfoByDistrictName(selectedDistrict).then((response) => {
          console.log(response.data);
          setParliaments(response.data);
        });
      }, [selectedDistrict]);
      console.log(parliament);
      // assembly
      const [assembly, setAssemblies] = useState([]);
      useEffect(() => {
        districtsBackend.getAssemblyInfoByDistrictName(selectedDistrict).then((response) => {
          console.log(response.data);
          setAssemblies(response.data);
        });
      }, [selectedDistrict]);
      console.log(parliament);
  const data = {
    labels: assembly.map(function(e) {return e.assemblyName;}),
    datasets: [
      {
        label: 'Male Voters',
        data: assembly.map(function(e) {return e.ac_maleVoters;}),
        backgroundColor: '#4d6073',
        color: 'white'
      },
      {
        label: 'Female Voters',
        data: assembly.map(function(e) {return e.ac_femaleVoters;}),
        backgroundColor: '#03446A',
        color: 'white'
      }
    ],
  };
  const data_par= {
    labels: parliament.map(function(e) {return e.parliamentName;}),
    datasets: [
      {
        label: 'Male Voters',
        data: parliament.map(function(e) {return e.pc_maleVoters;}),
        backgroundColor: '#4d6073',
        color: 'white'
      },
      {
        label: 'Female Voters',
        data: parliament.map(function(e) {return e.pc_femaleVoters;}),
        backgroundColor: '#03446A',
        color: 'white'
      }
    ],
  };

    return (
      <>
      <div className="wrap">

      <div className="tab">
        <div className="prlmnt">
          <h3 >Parliamentary Constituencies of {selectedDistrict}</h3>
          <table>
            <thead>
            <tr>
              <th>Parliament</th>
              <th>MP</th>
            </tr>
            </thead>
          </table>
            
            {parliament.map(parliamentary => (
            <table >
              <tbody>
              <tr>
                <td>{parliamentary.parliamentName}</td>
                <td> {parliamentary.memberOfParliament}</td>
              </tr>
              </tbody>
            </table>
            ))}

        </div>
        <div className="asmbly">
        <h3 >Assembly Constituencies of {selectedDistrict}</h3>
        <table>
          <tr>
              <th>Assembly</th>
              <th>MLA</th>
          </tr>
        </table>
          {assembly.map(assembly => (
          <table >
            <tr>
              <td>{assembly.assemblyName}</td>
              <td>{assembly.memberOfLegislativeAssembly}</td>
            </tr>
          </table>
          
        ))}
        </div>
      </div>
      <div className="graph" style={{width: "400px",height: "300px"}}>
          <Bar className="bar" options={options} plugins={[ChartDataLabels]} data={data_par}/>
          <Bar className="bar" options={options} plugins={[ChartDataLabels]} data={data}/>
      </div>
      </div>
          
    </>
    );
};
export default KarnatakaAssembly;
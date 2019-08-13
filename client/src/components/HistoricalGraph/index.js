import React from 'react';
import {Bar} from 'react-chartjs-2';
import './styles/style.css';

function HistoricalGraph(props) {
  // console.log(props);
  const data = {
    //line for the pricing data
    datasets: [{
    label: 'Spot price in USD',
    type:'line',
    data: props.prices,
    fill: false,
    borderColor: '#cfbd18', 
    // borderColor: '#55cbfa',   
    backgroundColor: '#cfbd18',
    borderJoinStyle: 'miter',
    // backgroundColor: '#f5f5f5',
    pointBorderColor: '#cfbd18',
    pointBackgroundColor: '#cfbd18',
    // pointHoverBackgroundColor: '#EC932F',
    // pointHoverBorderColor: '#EC932F',
    yAxisID: 'y-axis-1',
  },{
    //bar??????? maybe replace this with another line graph to demonstrate volume
    type: 'bar',
    label: 'Volume',
    data: props.volume,
    fill: false,
    backgroundColor: '#71B37C',
    borderColor: '#71B37C',
    hoverBackgroundColor: '#71B37C',
    hoverBorderColor: '#71B37C',
    yAxisID: 'y-axis-2'
    }]
    };
    
    const options = {
    responsive: true,
    maintainAspectRatio: false,
    labels: props.labels,
    tooltips: {
    mode: 'label'
    },
    elements: {
    line: {
    fill: false

    }
    },
    scales: {
    
    xAxes: [
      {
        display: true,
        gridLines: {
          display: true,
          color: '#3a3a3aa4'
        },
    
        labels: props.labels,
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true,
          color: '#3a3a3aa4'
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
    }
    };

    return (
      <div className="graphDiv">
        <h2 className="graphTitle">Historical Data for {props.title}</h2>
        <Bar
          data={data}
          options={options}
        />
      </div>
    );
  }
  
  export default HistoricalGraph;
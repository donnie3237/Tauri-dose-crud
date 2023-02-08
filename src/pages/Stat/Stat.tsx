import React from 'react'
import './stat.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar , Pie} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {};
function Stat() {
  const data ={
    labels:['Gol D. Roger','Trafalgar D. Water Lawer','Brook'],
    datasets:[{
      label:"dose",
      data:[30,24,31],
      borderColor:"black",
      backgroundColor:['blue','black','white'],
      borderWidth:1
    }]
  }
  
  return (
    <div className='FP stat'>
      <div className="roro flex">
        <Bar 
          data={data}
          options={options}
        ></Bar>
      </div>
      <div className="roro2 flex">
        <Pie
          data={data}
          options={options}
        ></Pie>
      </div>
    </div>
  )
}

export default Stat
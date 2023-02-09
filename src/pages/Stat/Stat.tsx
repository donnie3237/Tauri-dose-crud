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
  scales,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar , Pie , Line} from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { APiURL } from "../../api";
import { Oval } from 'react-loader-spinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales
);

const options: Chart.ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales:{
  },
  plugins: {
    legend: true,
    title: {
      display: true,
      text: 'อย่าลืมเขียนกุเด้',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 20
          }
        }
      ]
    }
  },
};

function Stat() {
  let Weightlabels : string[];
  let weights : number[];
  let heightlabel : string[];
  let heights : number[];
  let AgeLabel : string[];
  let Age : number[];
  let NewLabel : string[];
  let NewEstA : number[];
  let NewEstW : number[];
  let NewEstH : number[];

  const [user, setUser] = useState<any[]>();
	useEffect(() => {
		axios.get(`${APiURL}/api`)
		.then(response => {
      const restfirst :[] = response.data
       setUser(restfirst);
      })
	}, [])
  if(user){
    const sortedUserByWeight = [...user].sort((a, b) => b.weight - a.weight).slice(0,10);
    const sortedUserByHeight = [...user].sort((a, b) => b.height - a.height).slice(0,10);
    const sortedUserByAge = [...user].sort((a, b) => b.age - a.age).slice(0,10);
    const sortedUserByNew =[...user].sort((a:any, b:any) => (b._id > a._id) ? 1 : ((a._id > b._id) ? -1 : 0)).slice(0,5)
    Weightlabels = sortedUserByWeight.map((u:any) => u.name);
    weights = sortedUserByWeight.map((u:any) => u.weight);
    heightlabel = sortedUserByHeight.map((us:any) => us.name);
    heights = sortedUserByHeight.map((u:any) => u.height);
    AgeLabel = sortedUserByAge.map((u:any)=> u.name)
    Age = sortedUserByAge.map((u:any)=> u.age)
    NewLabel = sortedUserByNew.map((u:any)=> u.name)
    NewEstA = sortedUserByNew.map((u:any)=> u.age)
    NewEstW = sortedUserByNew.map((u:any)=> u.weight)
    NewEstH = sortedUserByNew.map((u:any)=> u.height)
  }

const data = {
  labels: Weightlabels,
  datasets: [
    {
      label: "Weight(kg)",
      data: weights,
      borderColor: "black",
      backgroundColor: ["blue","rgb(172, 172, 225)",'black','rgb(200, 255, 0)','white','aqua','green','purple','pink','red'],
      borderWidth: 1
    }
  ]
};
const data2 = {
  labels: heightlabel,
  datasets: [
    {
      label: "Height(cm)",
      data: heights,
      borderColor: "black",
      backgroundColor: ["blue","rgb(172, 172, 225)",'black','rgb(200, 255, 0)','white','aqua','green','purple','pink','red'],
      borderWidth: 1
    }
  ]
};
const data3 = {
  labels: AgeLabel,
  datasets: [
    {
      label: "Age(years)",
      data: Age,
      borderColor: "black",
      backgroundColor: ["blue","rgb(172, 172, 225)",'black','rgb(200, 255, 0)','white','aqua','green','purple','pink','red'],
      borderWidth: 1
    }
  ]
};
const data4 = {
  labels:NewLabel,
  datasets: [
    {
      label: 'Age',
      data: NewEstA,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Weight',
      data: NewEstW,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgb(60, 150, 273)'
    },
    {
      label: 'Height',
      data: NewEstH,
      borderColor: 'rgb(2, 108, 2)',
      backgroundColor: 'rgb(40, 248, 40)'
    }
  ]
};
  
  return (
    user?
    <div className='FP stat'>
      <h1>Heaviest</h1>
      <div className="">
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
      <h1>Tallest</h1>
      <div className="">
      <div className="roro2 flex">
        <Bar 
          data={data2}
          options={options}
        ></Bar>
      </div>
      <div className="roro flex">
        <Pie
          data={data2}
          options={options}
        ></Pie>
      </div>
      </div>
      <h1>Oldest</h1>
      <div className="">
      <div className="roro2 flex">
        <Bar 
          data={data3}
          options={options}
        ></Bar>
      </div>
      <div className="roro flex">
        <Pie       
          data={data3}
          options={options}
        ></Pie>
      </div>
      </div>
      <h1>Newest Data</h1>
      <div className="">
      <div className="roro2 flex">
        <Line 
          data={data4}
          options={options}
        ></Line>
      </div>
      </div>
    </div>
    :
    <div className="flex pink server "><h1>Loading data from server....</h1>
    <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
      </div>
  )
}

export default Stat
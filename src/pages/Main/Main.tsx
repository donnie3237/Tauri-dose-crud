import React,{useState,useEffect} from 'react'
import './FP.scss'
import axios from 'axios';
import MlLogo from './img/ml.png'
import LibLogo from './img/lib.png'
import IotLogo from './img/iot.png'

function Main() {
  setInterval(Time,1000)
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [dAte , setDate]= useState<any>()
  function Time() {
    const d = new Date();
    const hour = ("0" + d.getHours()).slice(-2);
    const min = ("0" + d.getMinutes()).slice(-2);
    const sec = ("0" + d.getSeconds()).slice(-2);
    setDate(hour + ':' + min + ':' + sec);
  }
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
      (results)=>{
        if(results){
         setIsOnline(true)
        }else{
          setIsOnline(false)
        }
      }
    )
  }, []);
  return (
    
    <div className='FP main'>
        <div className="flex status-bar">
          <h1 className='status'>{isOnline? "Status : online":"Status : offline"}</h1>
          <h1 className='time'>{dAte}</h1>
        </div>
        <div className="flex fr"><h1>Database system</h1></div>
        <div className="flex mini">
          <div className="flex on">
            <div className="crop flex"><h1>DosE-ML</h1></div>
            <div className="data">
              <img src={MlLogo} alt="" />
              <h1>Database with Machine Learning</h1>
              <a target={'_blank'} href="https://dose-products.netlify.app/#/products/doseml">DosE-ML</a></div>
            </div>
          <div className="flex tw">
          <div className="crop flex"><h1>DosE-LIB</h1></div>
            <div className="data">
              <img src={LibLogo} alt="" />
            <h1>Learn code,electric,energy and more</h1>
            <a target={'_blank'} href="https://dose-products.netlify.app/#/products/doselib">DosE-LIB</a></div>
            </div>  
        </div>
        <div className="flex fro">
          <div className="crop flex"><h1>DosE-IOT</h1></div>
          <div className="data">
            <img src={IotLogo} alt="" />
            <div className="flex">
              <h1>BigData with raspberry pi</h1>
              <a target={'_blank'} href="https://dose-products.netlify.app/#/products/doseiot">DosE-IOT</a></div>
            </div>
          </div>
    </div>
  )
}

export default Main
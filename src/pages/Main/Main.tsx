import React,{useState,useEffect} from 'react'
import './FP.scss'
import axios from 'axios';

function Main() {
  setInterval(Time,1000)
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [dAte , setDate]= useState<any>()
  function Time(){
    const d = new Date()
    const hour = d.getHours().toString()
    const min = d.getMinutes().toString()
    const sec = d.getSeconds().toString()
    setDate(hour +':'+ min+':' + sec) 
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
          <h1 className='time'>{`${dAte}`}</h1>
        </div>
        <div className="flex fr"><h1>Database Cloud system</h1></div>
        <div className="flex mini">
          <div className="flex on"><h1>Database with Machine Learning</h1>
          <a target={'_blank'} href="https://dose-products.netlify.app/#/products/doseml">DosE-ML</a></div>
          <div className="flex tw"><h1>Learn code,electric,energy and more</h1>
          <a target={'_blank'} href="https://dose-products.netlify.app/#/products/doselib">DosE-LIB</a></div>
        </div>
        <div className="flex fro"><h1>BigData with raspberry pi</h1>
        <a target={'_blank'} href="https://dose-products.netlify.app/#/products/doseiot">DosE-IOT</a></div>
    </div>
  )
}

export default Main
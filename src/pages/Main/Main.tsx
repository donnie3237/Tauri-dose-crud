import React,{useState,useEffect} from 'react'
import './FP.scss'
function Main() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    
    <div className='FP main'>
        <h1>{isOnline? "Status : online":"offline"}</h1>
        <div className="flex fr"><h1>Database Cloud system</h1></div>
        <div className="flex mini">
          <div className="flex on"><h1>Database with Machine Learning</h1><a href="">DosE-ML</a></div>
          <div className="flex tw"><h1>Learn Full-Stack</h1>
          <a href="">DosE-LIB</a></div>
        </div>
        <div className="flex fro"><h1>BigData with raspberry pi</h1>
        <a href="">DosE-IOT</a></div>
    </div>
  )
}

export default Main
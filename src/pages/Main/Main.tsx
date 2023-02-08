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
      
        <p>Welcome to DosE-CRUD</p>
        <h1>{isOnline? "onlne":"not online"}</h1>
        <div className="flex fr"><h1>1</h1></div>
        <div className="flex mini">
          <div className="flex on"><h1>2</h1></div>
          <div className="flex tw"><h1>3</h1></div>
        </div>
        <div className="flex fro"><h1>4</h1></div>
    </div>
  )
}

export default Main
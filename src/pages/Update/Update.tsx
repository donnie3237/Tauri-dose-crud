import React,{useState} from 'react'
import './up.scss'
import axios from 'axios'
import {toast} from 'react-toastify'
import { APiURL } from '../../api'
function Update() {
    const [checking , setChecking] = useState<boolean>(false)
    const [showUpdateLink, setShowUpdateLink] = useState(false);
    const version : string = "1.0.0"
    async function check(){
      setChecking(true)
      await axios.get(`${APiURL}/version`).then((response)=>{
        if(response.data === version){
          toast.success('this is latest version')
        }else{
          toast.warn(`New version is ${response.data}`)
          const awnser = document.getElementById('awnser') as HTMLElement
          setShowUpdateLink(true)
        }
      })
      setChecking(false)
    }
  return (
    <div className='up FP' >
        <div className="check flex">
            <h1>Check Update!!</h1>
            <p>Yourversion is : {version}</p>
            <button className='check-update flex' disabled={checking}  onClick={check}>
              {
                checking? 'Checking.....' : 'Check update'
              }
            </button>
            {
              showUpdateLink && (
                <a
                  href="https://dose-products.netlify.app/#/products/dosecrud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toup flex"
                >
                  Download and Update here
                </a>
              )
            }
            <div className="sqare one">
            </div>
            <div className="sqare two">
            </div>
        </div>
        <div className="cont flex">
            <h1>Feed back & Error</h1>
            <input type="text" placeholder='Feed back here :)'/>
            <button>SEND!</button>
        </div>
    </div>
  )
}

export default Update
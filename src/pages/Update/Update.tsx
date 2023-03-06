import React,{useState} from 'react'
import './up.scss'
import axios from 'axios'
import {toast} from 'react-toastify'
function Update() {
    const [showUpdateLink, setShowUpdateLink] = useState(false);
    const version : string = "1.0.0"
    const awnser = document.getElementById('awnser') as HTMLElement
    function check(){
      if("1.0.0" === version){
        toast.success('this is latest version')
      }else{
        toast.warn(`New version is ${version}`)
        const awnser = document.getElementById('awnser') as HTMLElement
        setShowUpdateLink(true)
      }
    }
  return (
    <div className='up FP' >
        <div className="check flex">
            <h1>Check Update!!</h1>
            <p>Yourversion is : {version}</p>
            <a className='check-update flex' onClick={check}>Check update</a>
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
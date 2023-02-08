import React from 'react'
import './up.scss'
import axios from 'axios'
import {toast} from 'react-toastify'
function Update() {
    const version : string = "1.0.0"
    const awnser = document.getElementById('awnser') as HTMLElement
    function check(){
      if("1.0.0" === version){
        toast.warn('this is latest version')
      }
    }
  return (
    <div className='up FP' >
        <div className="check flex">
            <h1>Check Update!!</h1>
            <p>Yourversion is : {version}</p>
            <a className='check-update' onClick={check}>Check update</a>
            <p id='awnser'></p>
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
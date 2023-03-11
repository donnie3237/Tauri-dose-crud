import React from 'react'
import './mam.scss'
import db from './img/db.png'
import one from './img/compass.jpg'
import two from './img/realm.png'
import thr from './img/maxresdefault.jpg'
function Mem() {
  return (
    <div className='mem FP'>
        <div className="main">
            <h1>Database system</h1>
            <img src={db} alt="" />
        </div>
        <div className="cont  flex">
            <h1>MongoDB Compass</h1>
            <img src={one} alt="" />
        </div>
        <div className="cont flex">
            <h1>MongoDB Realm</h1>
            <img src={two} alt="" />
        </div>
        <div className="cont flex">
            <h1>MongoDB Charts</h1>
            <img src={thr} alt="" />
        </div>
    </div>
  )
}

export default Mem
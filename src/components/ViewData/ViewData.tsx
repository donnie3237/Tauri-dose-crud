import React from 'react'
import './View.scss'

type Props = {
    name: string,
    age: string,
    weight: string,
    height: string,
    desc:string
}

function ViewData(props:Props):JSX.Element {
    function Close(){
        const sndf = document.getElementById('View') as HTMLElement
        sndf.style.opacity = '0'
    }
  return (
    <div className='View' id='View'>
        <div className="close" onClick={Close}>X</div>
        <h2>ViewData</h2>
        <h1>Name : {props.name}</h1>
        <h1>Age : {props.age}</h1>
        <h1>Weight :{props.weight}</h1>
        <h1>Height :{props.height}</h1>
        <h1>Description : {props.desc}</h1>
    </div>
  )
}

export default ViewData
import React,{useState,useEffect} from 'react'
import './update.scss'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { APiURL } from '../../api';

type Props = {
    _id: string
    name: string,
    age: string,
    weight: string,
    height: string,
    desc:string
}

function Update(props:Props): JSX.Element {
    const navigate = useNavigate()
    let ID = props._id
        const [Name, setName] = useState<string>(props.name);
        const [Age, setAge] = useState<string>(props.age);
        const [Weight, setWeight] = useState<string>(props.weight);
        const [Height, setHeight] = useState<string>(props.height);
        const [Desc, setDesc] = useState<string>(props.desc);
        useEffect(() => {
          setName(props.name)
          setAge(props.age)
          setWeight(props.weight)
          setHeight(props.height)
          setDesc(props.desc)
        }, [props])
    function UpdateData(){
        axios.put(`${APiURL}/update/${ID}`,{
						name : Name,
						age : Age,
						height : Height,
						weight : Weight,
						descrip : Desc
					}).then((Response)=>{
						if(Response.data === 'updated'){
							toast.success(`${Name} has been updated`)
                            Close()
						}
					}
                )
    }
    function Close(){
        const sndf = document.getElementById('update') as HTMLElement
        sndf.style.display = 'none'
    }
  return (
    <div className='update' id='update'>
        <h1>Update data</h1>
        <label htmlFor="">name</label>
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="">age</label>
        <input type="number" value={Age} onChange={(e) => setAge(e.target.value)}/>
        <label htmlFor="">height</label>
        <input type="number" value={Height} onChange={(e) => setHeight(e.target.value)}/>
        <label htmlFor="">weight</label>
        <input type="number" value={Weight} onChange={(e) => setWeight(e.target.value)}/>
        <label htmlFor="">description</label>
        <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)}/>
        <div className="button">
            <button onClick={Close}>close</button>
            <button onClick={UpdateData}>Update</button>
        </div>
    </div>
  )
}

export default Update


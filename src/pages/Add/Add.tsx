import React from 'react'
import {useState , useEffect} from 'react';
import './add.scss'
import Axios from "axios";
import { APiURL } from '../../api';
import axios from 'axios';
import {toast} from 'react-toastify'
//create
function Add(){
  const [staTus ,setStaTus] = useState<string>("Connecting....")
  useEffect(() => {
		axios.get(`${APiURL}/test`)
		.then(response => {
      setStaTus(response.data)
      })
	}, [])
  if(staTus ==="connected"){
    const GreenStatus = document.querySelector('.status') as HTMLElement
    GreenStatus.style.backgroundColor = 'green'
  }
	const [name,setName] = useState<string>('Waiting for server......')
	const [age,setAge] = useState<number>(0)
	const [height,setHeight]=useState<number>(0)
	const [weight,setWeight]=useState<number>(0)
	const [desc,setDesc]=useState<string>('')
	function postData(e : any){
		e.preventdefault()
		if(name !== '' && age !== 0 && height !== 0 && weight !== 0 && desc !== ''){
			Axios.post(`${APiURL}/add`,{
				name :name,
				age:age,
				height:height,
				weight:weight,
				desc :desc
			}).then((response)=>{
				if(response.data === 'success'){
				toast.success(`${name} has been created!`)
				const TheName =document.getElementById('name') as HTMLInputElement ;
				const TheAge = document.getElementById('age') as HTMLInputElement;
				const TheHeight =document.getElementById('height') as HTMLInputElement ;
				const TheWeight = document.getElementById('weight') as HTMLInputElement ;
				const TheDesc = document.getElementById('desc') as HTMLInputElement ;
				TheName.value = '' ;
				TheAge.value = '' ;
				TheHeight.value = '' ;
				TheWeight.value = '' ;
				TheDesc.value = '' ;
				setAge(0)
				setName('')
				setHeight(0)
				setWeight(0)
				setDesc('')
				}
		}).catch(
			(err)=>{
				console.log(err)
			}
		)
		}else{
		}
	}
	return (
		<div className='Allcr FP' >
			<div className="from">
				<div className="from-title">
					<h2>Create Data</h2>
				</div>
				<div className="from-content">
					<div className="from-content-title">
						<div className="input">
							<label>Name</label>
							<input type="text" 
								placeholder='YourName' 
								id='name' 
								name="name"
								onChange={(e) => {setName(e.target.value)}}
							/>
						</div>
						<div className="input">  
							<label >Age</label>
						<input type="number" 
							placeholder='YourAge(Y)' 
							id='age' 
							onChange={(e) => {setAge(parseInt(e.target.value))}}
						/>
						</div>
						<div className="input">  
							<label >Height</label>
						<input type="number" 
							placeholder='YourHeight(cm)' 
							id='height' 
							onChange={(e) => {setHeight(parseInt(e.target.value))}}
						/>
						</div>
						<div className="input">  
							<label >Weight</label>
						<input type="number" 
							placeholder='YourWeight(kg)' 
							id='weight' 
							onChange={(e) => {setWeight(parseInt(e.target.value))}}
							/>
							
						</div>
					</div>
					<div className="textarea">
						<label>Description</label>
						<textarea placeholder='YourDescription' 
							rows={5} 
							name='descrip' 
							id='desc'
							onChange={(e) => {setDesc(e.target.value)}}
						/>
					</div>
					<button className='btn' onClick={postData} >create</button>
				</div>
			</div>
      <div className="status flex">Server Status is : {staTus}</div>
		</div>
  )
}

export default Add


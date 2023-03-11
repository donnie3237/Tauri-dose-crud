import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import './list.scss'
import { APiURL } from "../../api";
import {Oval} from 'react-loader-spinner'
import { toast } from "react-toastify";
import Update from "../../components/updatePage/Update";
import ViewData from "../../components/ViewData/ViewData";

type Props = {
  _id: string
  name: string,
  age:string,
  weight:string,
  height:string,
  desc:string
}

function List() {
	const [user, setUser] = useState<any>();
  const [sortAscending, setSortAscending] = useState(true);
  const [Props, setProps] = useState<Props>({
    _id : '',
    name: '',
    age: '',
    weight: '',
    height: '',
    desc: ''
  })
	useEffect(() => {
		axios.get(`${APiURL}/api`)
		.then(response => {
      const restfirst :[] = response.data
       setUser(restfirst.sort((a:any, b:any) => (b._id > a._id) ? 1 : ((a._id > b._id) ? -1 : 0)));
      })
	}, [])
  const handleSortNew = () => {
    setSortAscending(!sortAscending);
      sortAscending
        ? user.sort((a:any, b:any) => (b._id > a._id) ? 1 : ((a._id > b._id) ? -1 : 0))
        : user.sort((a:any, b:any) => (b._id < a._id) ? 1 : ((a._id < b._id) ? -1 : 0))
  };
  const handleSortAge = () => {
    setSortAscending(!sortAscending);
      sortAscending
        ? user.sort((a:any, b:any) => a.age - b.age)
        : user.sort((a:any, b:any) => b.age - a.age)
  };
  const handleSortName = () => {
    setSortAscending(!sortAscending);
      sortAscending
        ? user.sort((a: any, b: any) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
        
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
        : user.sort((a: any, b: any) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        })
  };
  async function DeleteOne(userID: string , name : string) {
    await axios.delete(`${APiURL}/delete/${userID}`).then(async(response) => {
      await axios.get(`${APiURL}/api`)
		  .then(response => {
       setUser(response.data);
      })
      toast.success(`${name} has been deleted`)
      
    }).catch((err)=>{
      toast.warn('ahhhh')
    })
  }
  async function openUpdate(props:Props){
    await setProps(props)
    const View = document.getElementById('update') as HTMLElement
    View.style.display = 'flex'
  }
  async function openView(props:Props){
    await setProps(props)
    const sndf = document.getElementById('View') as HTMLElement
    sndf.style.opacity = '0.9'
  }
	return (
    user? 
		<div className="contain FP">{}
			<div className="contain-title flex">
				<h2>ตารางข้อมูล</h2>
        <div className="sortBy flex">
          <div className="name flex" onClick={handleSortAge}>Sort by Age</div>
          <div className="name flex" onClick={handleSortName}>Sort by Name</div>
          <div className="name flex" onClick={handleSortNew}>Sort by Time</div>
        </div>
			</div>
      <ViewData name={Props.name} age={Props.age} height={Props.height} weight={Props.weight} desc={Props.desc} />
      <Update _id={Props._id} name={Props.name} age={Props.age} height={Props.height} weight={Props.weight} desc={Props.desc} />
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Age(y)</th>
							<th>Manage</th>
						</tr>
					</thead>
					<tbody>
					{user &&
						user.map((user: any) => {
              if(user){
                return (
                  <tr key={user._id} id='reverse' onClick={()=>{openView(user)}}>
                    <td className="name">{user.name}</td>
                    <td className="age">{user.age}</td>
                    <td className="minw">
                      <a className="gap" onClick={()=>{openView(user)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                      </a>
                      <a className="gap" onClick={()=>{openUpdate(user) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                      </a>
                      <a className="gap" onClick={()=>{DeleteOne(user._id , user.name)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                      </a>
                    </td>
                  </tr>
                );
              }
							
						})}
				</tbody>
				</table>
        <br/>
		</div> : <div className="flex server"><h1>Connecting to server......</h1>
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
      </div>
		)};
export default List
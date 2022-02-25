import React, { useState ,useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios";
const FARMER_BASE_REST_API_URL = 'http://localhost:6789/api/v1/farmer';

  export const Farmerz = () => {

    const [farmerz,setFarmerz] = useState([])
    
    useEffect(()=>{
        axios.get(FARMER_BASE_REST_API_URL).then((response) =>{
            setFarmerz(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })

        
       axios.post(FARMER_BASE_REST_API_URL, farmerz).then((response)=>{
           console.log(response.data);
       })
    
        
        


    },[])

  return (
    <div className='container'>
            <h2 className='text-center'>List of our FarmerS</h2>
            <BrowserRouter>
            <Link to ='/AddFarm'className='btn btn-primary mb-2'>AddFarm</Link>
            </BrowserRouter>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>farmer Id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phone number</th>
                    <th>age</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        farmerz.map(
                            farmer =>
                            <tr key={farmer.id}>
                                <td>{farmer.id}</td>
                                <td>{farmer.f_name}</td>
                                <td>{farmer.l_name}</td>
                                <td>{farmer.gender}</td>
                                <td>{farmer.email}</td>
                                <td>{farmer.phoneNumber}</td>
                                <td>{farmer.age}</td>
                                <td >
                               
                                </td>

                            </tr>
                        )

                    }
                </tbody>

            </table>

        </div>

    )
  
}


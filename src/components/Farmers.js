import React,{useEffect, useState} from 'react';

import { Link, useParams,useHistory} from 'react-router-dom';
import FarmerServ from '../Service/FarmerServ';

const Farmer = ()=> {
    const [farmer,setFarmer] = useState([]);
    useEffect(()=>{
        FarmerServ.getAllFarmer.then((Response) =>{
            setFarmer(Response.data)
            console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[]

    )

    const deleteFarmer=(farmerId) =>{
        console.log(farmerId);
    }
    


    return (
        <div className='container'>
            <h2 className='text-center'>List of our Employee</h2>
            <Link to ='/add-farmer'className='btn btn-primary mb-2'>Add Farmer</Link>
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
                        farmer.map(
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
                                <Link className="btn btn-info" to={'/edit-farmer/${farmer.id} '}>Update</Link>
                                <button className="btn btn-danger" onClick  ={()=>deleteFarmer(farmer.id)}
                               style={{marginLeft :"10px"}} >delete</button>

                                </td>

                            </tr>
                        )

                    }
                </tbody>

            </table>

        </div>

    )
}
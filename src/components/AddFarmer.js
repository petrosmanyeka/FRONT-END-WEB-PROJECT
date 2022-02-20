 import React, { useEffect, useState } from 'react'
import { Link ,useHistory ,useParams} from 'react-router-dom'
import FarmerServ from '../Service/FarmerServ'
 
 const AddFarmer = () => {
    const [f_name,setFirstName]=useState('')
    const [l_name,setLastName] = useState('')
    const [gender,setGender] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [age,setAge  ] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateFarmer =(e)=>{
       
        e.preventDefualt();
        const farmer ={f_name,l_name,gender,email,phoneNumber,age}
        if(id){
            FarmerServ,updateFarmer(id,farmer).then((Response)=>{
                history.push('/famer');
            }).catch(error =>{console.log(error)})

        }
        else{
            FarmerServ.createFarmer(farmer).then((Response) =>{
                console.log(Response.data)
                history.push('/famer');
            }
            ).catch(error =>{console.log(error)})
    

        }
       
    }
    useEffect(() =>{
        FarmerServ.getFarmerById(id).then((Response)=>{
            setFirstName(Response.data.f_name)
            setLastName(Response.data.l_name)
            setGender(Response.data.gender)
            setEmail(Response.data.email)
            setPhoneNumber(Response.data.phoneNumber)
            setAge(Response.data.age)
        }).catch(error =>{console.log(error)})

    },[])
   return (
     <div className="container">
         <br></br>
         <div className="row">
             <div className="card col-md-6 offset-md-3 offse-md-3">
                 <h2 className="text-center">Add Farmer</h2>
                 <div className="card-body">
                     <form>
                         <div className="form-group mb-2">
                             <label className="form-label">First Name</label>
                             <input
                               type = "text"
                               placeholder= "Enter first Name"
                               name="f_name"
                               className="form-control"
                               value ={f_name}
                               onChange ={(e)=>setFirstName(e.target.value)}
                                >
                             </input>

                         </div>
                         <div className="form-group mb-2">
                             <label className="form-label">Last Name</label>
                             <input
                               type = "text"
                               placeholder= "Enter Last Name"
                               name="l_name"
                               className="form-control"
                               value ={l_name}
                               onChange ={(e)=>setLastName(e.target.value)}
                                >
                             </input>

                         </div>
                         <div className="form-group mb-2">
                             <label className="form-label">Gender</label>
                             <input
                               type = "text"
                               placeholder= "Enter gender"
                               name="gender"
                               className="form-control"
                               value ={gender}
                               onChange ={(e)=>setGender(e.target.value)}
                                >
                             </input>

                         </div>
                         <div className="form-group mb-2">
                             <label className="form-label">First Name</label>
                             <input
                               type = "text"
                               placeholder= "Enter first Name"
                               name="f_name"
                               className="form-control"
                               value ={f_name}
                               onChange ={(e)=>setFirstName(e.target.value)}
                                >
                             </input>

                         </div>
                         <div className="form-group mb-2">
                             <label className="form-label">Email</label>
                             <input
                               type = "email"
                               placeholder= "Enter first Name"
                               name="email"
                               className="form-control"
                               value ={f_name}
                               onChange ={(e)=>setEmail(e.target.value)}
                                >
                             </input>

                         </div>
                         <div className="form-group mb-2">
                             <label className="form-label">phone Number</label>
                             <input
                               type = "text"
                               placeholder= "Enter phone number"
                               name="phoneNumber"
                               className="form-control"
                               value ={phoneNumber}
                               onChange ={(e)=>setPhoneNumber(e.target.value)}
                                >
                             </input>

                         </div>
                         <div className="form-group mb-2">
                             <label className="form-label">Age</label>
                             <input
                               type = "text"
                               placeholder= "Enter age"
                               name="age"
                               className="form-control"
                               value ={age}
                               onChange ={(e)=>setAge(e.target.value)}
                                >
                             </input>

                         </div>
                         <button className="btn btn-success" onClick ={(e)=>saveOrUpdateFarmer(e)}>Submit</button>
                         <Link to="/farmer" className='btn btn-danger'>Cancel</Link>
                     </form>

                 </div>

             </div>

         </div>
         
     </div>
   )
 }
 
 export default AddFarmer 
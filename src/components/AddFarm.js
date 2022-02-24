import React from 'react'
import { useState } from 'react'
export const AddFarm = () => {

    const [f_name,setFirstName]=useState('')
    const [l_name,setLastName] = useState('')
    const [gender,setGender] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [age,setAge  ] = useState('')

    const saveFarmer =(e)=>{
        e.preventDefualt();
        const farmer ={f_name,l_name,gender,email,phoneNumber,age}
        console.log(farmer)
    }
    
  return (
    <div>
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
                             <label className="form-label">Email</label>
                             <input
                               type = "email"
                               placeholder= "Enter email"
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
                         
                         <button className="btn btn-success" onClick ={(e)=>saveFarmer(e)}>Submit</button>
                     </form>

                 </div>

             </div>

         </div>
         
     </div>
     </div>
  )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactService from '../Services/ContactService'
export default function AddContact() {
 let navigate = useNavigate();//For handling navigational actions.......
 const [state,setState] = useState({
    contact:{
        "fullName":"",
        "emailAddress":"",
        "phoneNo":0,
        "gender":"Male",
        "image":""
    }
 });
///////////////////State-Data of Component//////////////////////////////////////////////////////
 let {contact} = state;
 ///////////////////////////////////////////////////Events of DOM///////////////////////////////////////
 const updateInput=(e)=>
 {
    setState({...state,contact:{
        ...state.contact, [e.target.name]:e.target.value
    }})
 }

 const onSubmit = (e)=>
 {
    e.preventDefault();
    ContactService.AddPhone(contact).then((res)=>{
        alert("Contact Added Successfully");
        navigate('/')
    })
 }
 /////////////////////////Virtual DOM/////////////////////////////
    return (
<>
<pre>{JSON.stringify(contact)}</pre>
<h2>Add New Contact to Phone</h2>
<hr/>
<div className='container'>
    <div className='row'>
        <div className='col-md-6'>
            <form onSubmit={onSubmit}>
                <p>
                    Enter the Name:
                    <input onChange={updateInput} type="text" name='fullName' value={contact.fullName} className='form-control'/>
                </p>
                <p>
                    Enter the Email Address:
                    <input onChange={updateInput} type="email" name='emailAddress' value={contact.emailAddress} className='form-control'/>
                </p>
                <p>
                    Enter the Contact No.:
                    <input onChange={updateInput} type="number" name='phoneNo' value={contact.phoneNo} className='form-control'/>
                </p>
                <p>
                    Enter the Gender:
                    <input onChange={updateInput} type="text" name='gender' value={contact.gender} className='form-control'/>
                </p>
                <p>
                    Enter the Image:
                    <input onChange={updateInput} type="text" name='image' value={contact.image} className='form-control'/>
                </p>
                <p>
                    <button className='btn btn-success'>Save Contact
                    <i class></i>
                    </button>
                </p>
            </form>
        </div>
    </div>
</div>
</>
    
  )
}

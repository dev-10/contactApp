import React, { useState, useEffect } from 'react'
import ContactServices from '../Services/ContactService';
import Contact from './Contact';
function ContactList() {
    //the data to be stored in the component
    const [state, setState] = useState({
        contacts : [],
        errorMsg : ''
    });
    //useEffect hooks is used to perform background work while the main component is doing its main work like loading or rendering
    useEffect(()=>{
        async function fetchData(){
            const response = await ContactServices.GetPhones();
            setState({
                ...state, contacts:response.data
            })
        }
        fetchData()
    }, []);
    let {contacts, errorMsg} = state;
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <input type='search' className='form-control' placeholder='search for contact'/>
                            </div>
                            <div className='col'>
                               <button className='btn btn-primary'>Search</button>
                            </div>
                        </div>
                        <div className='row'>
                            {
                            contacts.map((c)=>
                                <Contact contact = {c}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactList
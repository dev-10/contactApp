import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ContactService from '../Services/ContactService';
import Contact from './Contact';
export default function ViewContact() {
    let{contactId} = useParams();
    let [state, setState] = useState({selected : {}})
    useEffect(()=>{
        async function getRec(){
            console.log(contactId);
            let response = await ContactService.GetPhone(contactId)
            setState({selected : response.data})
        }
        getRec();
    },[contactId])
    let{selected} = state;
    return(
        <div className='container'>
            <Contact contact={selected} disabled={true}></Contact>
        </div>
    )
}
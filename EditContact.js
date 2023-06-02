import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContactServices from '../Services/ContactService';
import Contact from './Contact';
function EditContact() {
    let{contactId} = useParams();
    let [ state, setState] = useState({selected:{}})
    useEffect(()=>{
        async function getRec(){
            console.log(contactId);
            let response = await ContactServices.GetPhone(contactId)
            setState({selected:response.data})
        }
        getRec();
    }, [contactId])
    let {selected} = state;
    return (
        <div className='container'>
            <Contact contact={selected} disabled={false}/>
        </div>
    )
}
export default EditContact
import React from 'react'
import Navigation from './Navigation'
import ImageComponent from './ImageComponent'
function Contact(props) {
    return (
        <React.Fragment>
            <section className='col-md-6 m-2 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ImageComponent url={props.contact.image}/>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' className='form-control m-2' disabled={props.disabled} placeholder='Contact Id' value={props.contact.id}/>

                            <input type='text' className='form-control m-2' disabled={props.disabled}placeholder='Contact Name' value={props.contact.fullName}/>

                            <input type='text' className='form-control m-2' disabled={props.disabled} placeholder='Contact Email Address' value={props.contact.emailAddress}/>
                        </div>
                            <Navigation id={props.contact.id}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact
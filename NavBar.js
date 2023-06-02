import React from 'react'

import { Link } from 'react-router-dom'




let NavBar=()=> {

    return (

        <>

        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>

            <div className='container'>

                <Link to={'/'} className='navbar-brand'>

                    View

                    <i class="fa fa-mobile-phone text-warning" aria-hidden="true"></i>

                    <span className='text-warning'> All Contacts</span>

                </Link>

                <Link to={'/contacts/add'} className='btn btn-success text-light'>

                    Add New

                    <i class="fa fa-plus text-warning" aria-hidden="true"></i>

                    <span className='text-warning'> Contacts</span>

                </Link>

            </div>

        </nav>

        </>

    )

}




export default NavBar